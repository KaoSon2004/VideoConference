const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.exists({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(409).send("User already existed");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.TOKEN_ENV,
      {
        expiresIn: "24h",
      }
    );
    return res.status(201).json({
      status: "success",
      username: user.username,
      email: user.email,
      id: user._id,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};
