const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please tell us your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  username: {
    type: String,
    required: [true, "Please provide us an username"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please provide password confirmation"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
      message: "Password are not the same",
    },
  },
  friends: [{ type: mongoose.Schema.Types.Object, ref: "User" }],
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
