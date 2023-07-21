const friendInvitation = require("../../model/friendInvitation");
const friendUpdate = require("../../socketHandlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id } = req.body;
    const invitationExisted = await friendInvitation.exists({ _id: id });
    if (invitationExisted) {
      await friendInvitation.findByIdAndDelete(id);
    }
    friendUpdate.pendingFriendInvitation(userId);
    return res.status(200).send("Reject successfully");
  } catch {
    return res.status(500).send("Something went wrong, Please Check");
  }
};

module.exports = postReject;
