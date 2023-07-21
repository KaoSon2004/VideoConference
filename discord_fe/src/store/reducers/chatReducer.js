import Action from "../actions/actionTypes";

const initState = {
  chatDetails: null,
  messages: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.SET_CHAT_DETAILS:
      return {
        ...state,
        chatDetails: action.chatDetails,
      };
    case Action.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
