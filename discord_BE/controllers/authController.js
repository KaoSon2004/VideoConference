const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const util = require("util");
const sendEmail = require("../utils/email");
const crypto = require("crypto");
function signToken(id) {
  const token = jwt.sign(
    {
      id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
  return token;
}
function sendToken(res, statusCode, user) {
  const token = signToken(user._id);
  return res.status(statusCode).json({
    status: "success",
    username: user.username,
    email: user.email,
    id: user._id,
    token,
  });
}
exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  sendToken(res, 201, newUser);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide Password and Email", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError("Invalid Credential", 401));
  }
  sendToken(res, 200, user);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    return next(new AppError("A token is need to authorization", 403));
  }

  token = token.replace(/Bearer\s+/, "");
  const decoded = await util.promisify(jwt.verify)(
    token,
    process.env.SECRET_KEY
  );
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError("User doesn't exits", 401));
  }

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError("Password has already changed", 401));
  }

  req.user = currentUser;

  next();
});

exports.updateCurrentPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ _id: req.user._id }).select("+password");
  if (!user || !user.comparePassword(req.body.currentPassword, user.password)) {
    return next(new AppError("Your current password is wrong", 400));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;

  await user.save();

  sendToken(res, 200, user);
});

exports.forgotYourpassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(
      new AppError("No user with that email, please check again", 404)
    );
  }
  const resetPasswordToken = user.createResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const requestReset = `http://localhost:3000/reset-password/${resetPasswordToken}`;
  const message = `Forgot your password, please click to  ${requestReset} to retrive your password. If you don't, please ignore this email`;

  const emailOptions = {
    from: "admin@gmail.com",
    to: user.email,
    subject: "Reset your password? (Valid in 10min)",
    message,
  };
  try {
    sendEmail(emailOptions);
    res.status(200).json({
      status: "success",
      message: "token already sent",
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpires = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(500).json({
      status: "fail",
      message: "internal server error",
    });
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const cryptoPassword = crypto
    .createHash("sha256")
    .update(req.body.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: cryptoPassword,
    resetPasswordTokenExpires: { $gt: new Date(Date.now()) },
  });
  if (!user) {
    return next(new AppError("Invalid Token Or Token Expired", 400));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordTokenExpires = undefined;
  await user.save();
  sendToken(res, 200, user);
});
