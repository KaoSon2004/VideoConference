const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const util = require("util");
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
