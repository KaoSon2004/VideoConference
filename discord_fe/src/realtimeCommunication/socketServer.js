import io from "socket.io-client";
import * as actions from "../store/actions";
import store from "../store/reducers/rootReducer";
import updateHistoryIfActive from "../utils/updateHistoryIfActive";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";
let socket = null;

export const socketServer = ({ token }) => {
  socket = io(process.env.REACT_APP_SERVER_URL, {
    auth: {
      token,
    },
  });
  socket.on("connect", () => {
    console.log("connect successfull from client");
  });
  socket.on("friend-invitations", (data) => {
    const { pendingInvitation } = data;

    store.dispatch(actions.setPendingInvitation(pendingInvitation));
  });
  socket.on("friend-list", (data) => {
    const { friends } = data;
    store.dispatch(actions.setFriends(friends));
  });
  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(actions.setOnlineUsers(onlineUsers));
  });
  socket.on("update-history", (data) => {
    updateHistoryIfActive(data);
  });
  socket.on("create-room", (data) => {
    const { roomDetails } = data;
    store.dispatch(actions.setRoomDetails(roomDetails));
  });
  socket.on("active-room", (data) => {
    roomHandler.updateActiveRoom(data);
  });
  socket.on("connect-prepare", (data) => {
    console.log("some-one join room");
    const { connectUserSocketId: connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit("conn-init", { connUserSocketId: connUserSocketId });
  });
  socket.on("conn-init", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });
  socket.on("conn-signal", (data) => {
    webRTCHandler.handleSignalingData(data);
  });
  socket.on("room-participant-left", (data) => {
    console.log("user left room");
    webRTCHandler.handleParticipantLeftRoom(data);
  });
  return socket;
};
export const sendDirectMessage = (data) => {
  socket?.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket?.emit("initial-history", data);
};

export const createRoom = (data) => {
  socket?.emit("create-room", data);
};

export const joinRoom = ({ roomId }) => {
  socket?.emit("join-room", { roomId });
};

export const leaveRoom = ({ roomId }) => {
  socket?.emit("leave-room", { roomId });
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
};
