const serverStore = require("../socketStore");
const updateRooms = require("../socketHandlers/updates/activeroom");
const createRoomHandler = async (socket) => {
  console.log("handling create room event");
  const socketId = socket.id;
  const userId = socket.user.userId;
  const roomDetails = serverStore.addNewActiveRoom(userId, socketId);
  socket.emit("create-room", {
    roomDetails,
  });
  updateRooms.activeRooms();
};

module.exports = createRoomHandler;
