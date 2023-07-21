const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  content: { type: String },
  date: {
    type: Date,
  },
  type: {
    type: String,
  },
});

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;
