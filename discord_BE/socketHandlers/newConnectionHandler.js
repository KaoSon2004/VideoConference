const socketStore = require("../socketStore");
const updateFriend = require("./updates/friends");
const updateRoom = require("./updates/activeroom");

function addNewConnectionHandler(socket, io) {
  const userDetail = socket.user;
  if (userDetail) {
    socketStore.addNewConnection({
      socketId: socket.id,
      userId: userDetail?.userId,
    });
    updateFriend.pendingFriendInvitation(userDetail.userId);
    updateFriend.friends(userDetail.userId);

    setTimeout(() => {
      updateRoom.activeRooms(socket.id);
    }, [1000]);
  }
}

module.exports = {
  addNewConnectionHandler,
};
