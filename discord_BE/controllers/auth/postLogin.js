const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (user && (await bcrypt.compare(password, user.password))) {
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
      return res.status(200).json({
        status: "success",
        id: user._id,
        token,
        username: user.username,
      });
    }
    return res.status(404).json({
      status: "failed",
      message: "Invalid Credential",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: error,
    });
  }
};
