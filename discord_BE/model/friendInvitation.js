const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendInvitationSchema = new mongoose.Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const friendInvitationModel = mongoose.model(
  "FriendInvitation",
  friendInvitationSchema
);

module.exports = friendInvitationModel;
