const socketStore = require("../../socketStore");

const activeRooms = (targetsocketId = null) => {
  const io = socketStore.getServerSocketInstance();
  const activeRooms = socketStore.getActiveRooms();

  if (targetsocketId) {
    io.to(targetsocketId).emit("active-room", {
      activeRooms,
    });
  } else {
    io.emit("active-room", {
      activeRooms,
    });
  }
};

module.exports = { activeRooms };
