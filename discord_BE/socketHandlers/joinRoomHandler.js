const socketStore = require("../socketStore");
const updateRooms = require("./updates/activeroom");

const joinRoomHandler = (socket, data) => {
  const userId = socket.user.userId;
  const roomId = data.roomId;

  const participantDetails = {
    userId,
    socketId: socket.id,
  };
  const roomDetails = socketStore.getActiveRoom(roomId);
  socketStore.joinActiveRoom(roomId, participantDetails);
  roomDetails.participants.forEach((participant) => {
    if (participant.socketId != participantDetails.socketId) {
      socket.to(participant.socketId).emit("connect-prepare", {
        connectUserSocketId: participantDetails.socketId,
      });
    }
  });
  updateRooms.activeRooms();
};

module.exports = joinRoomHandler;
