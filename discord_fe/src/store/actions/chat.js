import Action from "./actionTypes";

export const setChatDetails = ({ id, name }) => ({
  type: Action.SET_CHAT_DETAILS,
  chatDetails: { id, name },
});
export const setMessages = (messages) => ({
  type: Action.SET_MESSAGES,
  messages,
});
