const socketStore = require("../socketStore");
const leaveRoomHandler = require("../socketHandlers/leaveRoomHandler");
function removeConnectionHandler(socket) {
  const activeRooms = socketStore.getActiveRooms();

  activeRooms.forEach((activeRoom) => {
    const isInRoom = activeRoom.participants.some(
      (participant) => participant.socketId == socket.id
    );
    if (isInRoom) {
      leaveRoomHandler(socket, { roomId: activeRoom.roomId });
    }
  });

  socketStore.removeConnection({ socketId: socket.id });
  console.log("user disconnect");
}

module.exports = removeConnectionHandler;
