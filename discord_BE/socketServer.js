const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const removeConnectionHandler = require("./socketHandlers/removeConnectionHandler");
const socketStore = require("./socketStore");
const MessageHandler = require("./socketHandlers/MessageHandler");
const chatHistoryHandler = require("./socketHandlers/chatHistoryHandler");
const createRoomHandler = require("./socketHandlers/createRoomHandler");
const joinRoomHandler = require("./socketHandlers/joinRoomHandler");
const leaveRoomHandler = require("./socketHandlers/leaveRoomHandler");
const roomSignalingDataHandler = require("./socketHandlers/roomSignalingDataHandler");

const roomInitializeConnectionHandler = require("./socketHandlers/roomInitializeConnectionHandler");
const registerSocket = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  socketStore.setServerSocketInstance(io);
  const emitOnlineUser = () => {
    const onlineUsers = socketStore.getOnlineUsers();
    io.emit("online-users", { onlineUsers });
  };
  io.use((socket, next) => {
    authSocket(socket, next);
  });
  io.on("connection", (socket) => {
    newConnectionHandler.addNewConnectionHandler(socket, io);
    emitOnlineUser();

    socket.on("direct-message", (data) => {
      MessageHandler(socket, data);
    });
    socket.on("initial-history", (data) => {
      chatHistoryHandler(socket, data);
    });
    socket.on("create-room", (data) => {
      createRoomHandler(socket);
    });
    socket.on("join-room", (data) => {
      joinRoomHandler(socket, data);
    });
    socket.on("conn-init", (data) => {
      roomInitializeConnectionHandler(socket, data);
    });
    socket.on("leave-room", (data) => {
      leaveRoomHandler(socket, data);
    });
    socket.on("conn-signal", (data) => {
      console.log("in");
      console.log(data);
      roomSignalingDataHandler(socket, data);
    });
    socket.on("disconnect", () => {
      removeConnectionHandler(socket);
    });
  });
  setInterval(() => {
    emitOnlineUser();
  }, [5000]);
};

module.exports = {
  registerSocket,
};
