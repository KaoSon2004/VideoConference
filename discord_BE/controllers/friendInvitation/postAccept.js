const friendInvitation = require("../../model/friendInvitation");
const User = require("../../model/user");
const updateFriend = require("../../socketHandlers/updates/friends");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const invitation = await friendInvitation.findById(id);
    if (!invitation) {
      return res
        .status(401)
        .send("Something went wrong. Invitation doesn't exits");
    }
    const { senderId, receiverId } = invitation;

    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];
    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    await friendInvitation.findByIdAndDelete(id);

    updateFriend.pendingFriendInvitation(receiverId.toString());

    updateFriend.friends(receiverId.toString());
    updateFriend.friends(senderId.toString());

    return res.status(200).send("Accept Successfully");
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};

module.exports = postAccept;
