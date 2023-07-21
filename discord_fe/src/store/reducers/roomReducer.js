import Action from "../actions/actionTypes";

const initState = {
  isRoomCreator: null,
  isInRoom: null,
  roomDetails: null,
  activeRooms: null,
  localStream: null,
  audioOnly: null,
  remoteStreams: [],
  screenSharingStream: null,
  isScreenSharingActive: null,
};

function roomReducer(state = initState, action) {
  switch (action.type) {
    case Action.CREATE_ROOM:
      return {
        ...state,
        isRoomCreator: action.isRoomCreator,
        isInRoom: action.isInRoom,
      };
    case Action.SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: action.roomDetails,
      };
    case Action.SET_ACTIVE_ROOMS:
      return {
        ...state,
        activeRooms: action.activeRooms,
      };
    case Action.SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.stream,
      };
    case Action.SET_AUDIO_ONLY:
      return {
        ...state,
        audioOnly: action.audioOnly,
      };
    case Action.SET_REMOTE_STREAM:
      return {
        ...state,
        remoteStreams: action.remoteStreams,
      };
    case Action.SET_SCREEN_SHARING_STREAM:
      console.log("hello world");
      return {
        ...state,
        screenSharingStream: action.screenSharingStream,
        isScreenSharingActive: action.isScreenSharingActive,
      };
    default:
      return state;
  }
}
export default roomReducer;
