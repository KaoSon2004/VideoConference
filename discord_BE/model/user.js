const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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

  changedPasswordAt: Date,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") == false) return next();
  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
});

userSchema.methods.comparePassword = async function (
  password,
  cryptedPassword
) {
  return await bcrypt.compare(password, cryptedPassword);
};
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.changedPasswordAt) {
    const changedPasswordAtTimeStamp =
      parseInt(this.changedPasswordAt.getTime(), 10) / 1000;
    return changedPasswordAtTimeStamp > JWTTimestamp;
  }
};
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
