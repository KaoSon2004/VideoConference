import Action from "../actions/actionTypes";

const initState = {
  friends: [],
  pendingInvitation: [],
  onlineUsers: [],
  invitationSentOk: null
};

const friendReducer = (state = initState, action) => {
  switch (action.type) {
    case Action.SET_FRIEND_PENDING_INVITATION:
      return {
        ...state,
        pendingInvitation: action.pendingInvitation,
      };
    case Action.SET_FRIEND:
      return {
        ...state,
        friends: action.friends,
      };
    case Action.ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };
    case Action.SEND_FRIEND_INVITATION_FAILED:
      return {
        ...state,
        invitationSentOk: false
      }
    case Action.SEND_FRIEND_INVITATION_SUCCESS:
      return {
        ...state,
        invitationSentOk: true
      }
    case Action.CLOSE_FRIEND_INVITATION: {
      return {
        ...state,
        invitationSentOk: null
      }
    }
    default:
      return {
        ...state,
      };
  }
};
export default friendReducer;
