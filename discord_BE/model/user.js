const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
  friends: [{ type: mongoose.Schema.Types.Object, ref: "User" }],
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
