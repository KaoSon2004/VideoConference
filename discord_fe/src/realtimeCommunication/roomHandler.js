import store from "../store/reducers/rootReducer";
import * as actions from "../store/actions";
import * as socketServer from "../realtimeCommunication/socketServer";
import * as webRTCHandler from "./webRTCHandler";

export const createRoom = (isRoomCreator, isInRoom) => {
  function callback() {
    store.dispatch(actions.createRoom(isRoomCreator, isInRoom));
    socketServer.createRoom();
  }
  const audioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, callback);
};

export const updateActiveRoom = (data) => {
  const { activeRooms } = data;
  const friends = store.getState().friend.friends;
  let rooms = [];
  const userId = store.getState().auth.userId;
  activeRooms.forEach((activeRoom) => {
    const isRoomCreatedByMe = userId == activeRoom.creator.userId;
    if (isRoomCreatedByMe) {
      rooms = [{ ...activeRoom, username: "Me" }];
    } else {
      friends.forEach((f) => {
        if (activeRoom.creator.userId == f.id) {
          rooms = [{ ...activeRoom, username: f.username }];
        }
      });
    }
  });
  store.dispatch(actions.setActiveRooms(rooms));
};

export const handleJoinRoom = (roomId) => {
  function callback() {
    store.dispatch(actions.setRoomDetails({ roomId }));
    store.dispatch(actions.createRoom(false, true));
    socketServer.joinRoom({ roomId });
  }
  const audioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, callback);
};
export const handleLeaveRoom = () => {
  const roomId = store.getState().room.roomDetails?.roomId;
  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(actions.setLocalStream(null));
  }
  const screenSharingStream = store.getState().room.screenSharingStream;

  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(actions.setLocalStream(null));
  }
  store.dispatch(actions.setRemoteStreams([]));
  webRTCHandler.closeAllConnections();

  socketServer.leaveRoom({ roomId });
  store.dispatch(actions.setRoomDetails(null));
  store.dispatch(actions.createRoom(false, false));
};
