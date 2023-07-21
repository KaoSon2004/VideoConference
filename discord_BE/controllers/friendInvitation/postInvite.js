const friendInvitationModel = require("../../model/friendInvitation");
const User = require("../../model/user");
const friendUpdate = require("../../socketHandlers/updates/friends");

module.exports = async (req, res) => {
  const { targetMail } = req.body;

  const { email, userId } = req.user;
  console.log(email, userId);

  if (email.toLowerCase() == targetMail.toLowerCase()) {
    return res
      .status(409)
      .send("You can not send friend invitation to yourself");
  }
  const targetUser = await User.findOne({
    email: targetMail,
  });
  if (!targetUser) {
    return res
      .status(404)
      .send("Account not exists. Please check email address");
  }
  const InvitationAlreadySent = await friendInvitationModel.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });
  if (InvitationAlreadySent) {
    return res.status(409).send("Invitation Already Sent");
  }
  const AlreadyFriend = await targetUser.friends.find(
    (friendId) => friendId == userId
  );
  if (AlreadyFriend) {
    return res.status(409).send("User Already Friend ");
  }

  const newInvitation = await friendInvitationModel.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  friendUpdate.pendingFriendInvitation(targetUser._id);

  return res.status(201).send("Invitation sent");
};
