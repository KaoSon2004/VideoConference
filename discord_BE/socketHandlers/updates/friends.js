const friendInvitationModel = require("../../model/friendInvitation");
const socketStore = require("../../socketStore");
const User = require("../../model/user");

const pendingFriendInvitation = async (userId) => {
  try {
    const pendindInvitation = await friendInvitationModel
      .find({
        receiverId: userId,
      })
      .populate("senderId", "_id, username email");

    const activeConnections = socketStore.getActiveConnections(userId);

    const io = socketStore.getServerSocketInstance();
    activeConnections.forEach((con) => {
      io.to(con).emit("friend-invitations", {
        pendingInvitation: pendindInvitation ? pendindInvitation : [],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const friends = async (userId) => {
  try {
    const activeConnections = socketStore.getActiveConnections(userId);
    if (activeConnections.length > 0) {
      const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
        "friends",
        "_id username email"
      );
      if (user) {
        const friendList = user.friends.map((f) => ({
          id: f._id,
          username: f.username,
          email: f.email,
        }));
        const io = socketStore.getServerSocketInstance();
        activeConnections.forEach((con) => {
          io.to(con).emit("friend-list", {
            friends: friendList ? friendList : [],
          });
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  pendingFriendInvitation,
  friends,
};
