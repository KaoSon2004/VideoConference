import Action from "./actionTypes";

export const createRoom = (isRoomCreator = false, isInRoom = false) => ({
  type: Action.CREATE_ROOM,
  isRoomCreator,
  isInRoom,
});
export const setRoomDetails = (roomDetails) => ({
  type: Action.SET_ROOM_DETAILS,
  roomDetails,
});

export const setActiveRooms = (activeRooms) => ({
  type: Action.SET_ACTIVE_ROOMS,
  activeRooms,
});

export const setLocalStream = (stream) => ({
  type: Action.SET_LOCAL_STREAM,
  stream,
});

export const setAudioOnly = (audioOnly) => ({
  type: Action.SET_AUDIO_ONLY,
  audioOnly,
});
export const setRemoteStreams = (remoteStreams) => ({
  type: Action.SET_REMOTE_STREAM,
  remoteStreams,
});

export const setScreenSharingStream = (stream) => {
  console.log("in");
  const isScreenSharingActive = stream ? true : false;
  console.log(isScreenSharingActive);
  return {
    type: Action.SET_SCREEN_SHARING_STREAM,
    isScreenSharingActive: stream ? true : false,
    screenSharingStream: stream,
  };
};
