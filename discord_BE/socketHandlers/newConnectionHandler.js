const socketStore = require("../socketStore");
const updateFriend = require("./updates/friends");
const updateRoom = require("./updates/activeroom");

function addNewConnectionHandler(socket, io) {
  const userDetail = socket.user;
  if (userDetail) {
    socketStore.addNewConnection({
      socketId: socket.id,
      userId: userDetail?.id,
    });
    updateFriend.pendingFriendInvitation(userDetail.id);
    updateFriend.friends(userDetail.id);

    setTimeout(() => {
      updateRoom.activeRooms(socket.id);
    }, [1000]);
  }
}

module.exports = {
  addNewConnectionHandler,
};
