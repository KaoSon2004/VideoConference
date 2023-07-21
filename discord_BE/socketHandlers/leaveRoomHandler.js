const getActiveRoom = require("../socketStore");
const socketStore = require("../socketStore");
const updateRooms = require("../socketHandlers/updates/activeroom");

const leaveRoomHandler = (socket, data) => {
  const { roomId } = data;
  const activeRooms = socketStore.getActiveRoom(roomId);
  if (activeRooms) {
    socketStore.leaveRoom(roomId, socket.id);

    const updatedActiveRoom = socketStore.getActiveRoom(roomId);

    if (updatedActiveRoom) {
      updatedActiveRoom.participants.forEach((participant) => {
        socket.to(participant.socketId).emit("room-participant-left", {
          connUserSocketId: socket.id,
        });
      });
    }

    updateRooms.activeRooms();
  }
};

module.exports = leaveRoomHandler;
