const Action = {
  //auth
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGOUT: "LOGOUT",

  //FRIEND
  SET_FRIEND_PENDING_INVITATION: "SET_FRIEND_PENDING_INVITATION",
  SET_FRIEND: "SET_FRIEND",
  ONLINE_USERS: "ONLINE_USERS",
  SEND_FRIEND_INVITATION_SUCCESS: "SEND_FRIEND_INVITATION_SUCCESS",
  SEND_FRIEND_INVITATION_FAILED: "SEND_FRIEND_INVITATION_FAILED",
  CLOSE_FRIEND_INVITATION: "CLOSE_FRIEND_INVITATION",

  //CHAT
  SET_CHAT_DETAILS: "SET_CHAT_DETAILS",
  SET_MESSAGES: "SET_MESSAGES",

  //ROOM
  CREATE_ROOM: "CREATE_ROOM",
  SET_ROOM_DETAILS: "SET_ROOM_DETAILS",
  SET_ACTIVE_ROOMS: "SET_ACTIVE_ROOMS",
  SET_LOCAL_STREAM: "SET_LOCAL_STREAM",
  SET_AUDIO_ONLY: "SET_AUDIO_ONLY",
  SET_REMOTE_STREAM: "SET_REMOTE_STREAM",
  SET_SCREEN_SHARING_STREAM: "SET_SCREAM_SHARING_STREAM",

  //ACTION
  SET_OPEN_FORGOTPASSWORD_MODAL: "SET_OPEN_FORGOTPASSWORD_MODAL",
};

export default Action;
