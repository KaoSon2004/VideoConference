const { v4: uuidv4 } = require("uuid");
const connectedUser = new Map();
let activeRooms = [];
let io = null;

const setServerSocketInstance = (ioInstance) => {
  io = ioInstance;
};

const getServerSocketInstance = () => {
  return io;
};

const addNewConnection = ({ socketId, userId }) => {
  connectedUser.set(socketId, { userId });
};
const removeConnection = ({ socketId }) => {
  if (connectedUser.has(socketId)) {
    connectedUser.delete(socketId);
  }
};
const getActiveConnections = (userId) => {
  let activeConnections = [];
  connectedUser.forEach((value, key) => {
    if (value.userId == userId) {
      activeConnections.push(key);
    }
  });
  return activeConnections;
};

const getOnlineUsers = () => {
  let onlineUsers = [];
  connectedUser.forEach((value, key) => {
    onlineUsers.push({
      socketId: key,
      userId: value.userId,
    });
  });
  return onlineUsers;
};
const addNewActiveRoom = (userId, socketId) => {
  const newActiveRoom = {
    creator: {
      userId,
      socketId,
    },
    participants: [
      {
        userId,
        socketId,
      },
    ],
    roomId: uuidv4(),
  };
  activeRooms = [...activeRooms, newActiveRoom];
  console.log(newActiveRoom);
  return newActiveRoom;
};
const getActiveRooms = () => {
  return [...activeRooms];
};
const joinActiveRoom = (roomId, participantDetails) => {
  const room = activeRooms.find((activeRoom) => activeRoom.roomId == roomId);
  const newActiveRooms = activeRooms.filter(
    (activeRoom) => activeRoom.roomId != roomId
  );

  const updatedRoom = {
    ...room,
    participants: [...room.participants, participantDetails],
  };
  activeRooms.push(updatedRoom);

  return;
};
const getActiveRoom = (roomId) => {
  const activeRoom = activeRooms.find(
    (activeRoom) => activeRoom.roomId === roomId
  );

  if (activeRoom) {
    return {
      ...activeRoom,
    };
  } else {
    return null;
  }
};
const leaveRoom = (roomId, socketId) => {
  const activeRoom = getActiveRoom(roomId);

  if (activeRoom) {
    const newRoom = { ...activeRoom };
    newRoom.participants.filter(
      (participant) => participant.socketId != socketId
    );

    activeRooms.filter((room) => room.roomId != roomId);

    if (newRoom.participants.length > 0) {
      activeRooms.push(newRoom);
    }
  }
};
module.exports = {
  addNewConnection,
  removeConnection,
  getActiveConnections,
  setServerSocketInstance,
  getServerSocketInstance,
  getOnlineUsers,
  addNewActiveRoom,
  getActiveRooms,
  getActiveRoom,
  joinActiveRoom,
  leaveRoom,
};
