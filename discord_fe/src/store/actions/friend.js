import * as apis from "../../service";
import Action from "./actionTypes";

export const sendFriendInvitation =
  ({ targetMail, token }) =>
  async (dispatch) => {
    try {
      const response = await apis.sendFriendInvitation(targetMail, token);
      dispatch({
        type: Action.SEND_FRIEND_INVITATION_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: Action.SEND_FRIEND_INVITATION_FAILED
      })
    }
  };
export const acceptFriendInvitation =
  ({ id, token }) =>
  async (dispatch) => {
    try {
      const response = await apis.acceptFriendInvitation(id, token);
    } catch (error) {}
  };
export const rejectFriendInvitation =
  ({ id, token }) =>
  async (dispatch) => {
    try {
      const response = await apis.rejectFriendInvitation(id, token);
    } catch (error) {}
  };

export const setPendingInvitation = (pendingInvitation) => {
  return {
    type: Action.SET_FRIEND_PENDING_INVITATION,
    pendingInvitation,
  };
};

export const setFriends = (friends) => {
  return {
    type: Action.SET_FRIEND,
    friends,
  };
};
export const setOnlineUsers = (onlineUsers) => {
  return {
    type: Action.ONLINE_USERS,
    onlineUsers,
  };
};
