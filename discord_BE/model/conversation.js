const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
});

const conversationModel = mongoose.model("Conversation", conversationSchema);

module.exports = conversationModel;
