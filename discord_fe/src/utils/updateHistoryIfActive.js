import store from "../store/reducers/rootReducer";
import * as actions from "../store/actions";
function updateHistoryIfActive(data) {
  const { messages, participants } = data;
  const userId = store.getState().auth.userId;

  const receiverUserId = store.getState().chat.chatDetails?.id;

  if (userId && receiverUserId) {
    console.log("in");
    const inConnection = [userId, receiverUserId];
    const result = participants.every((participant) =>
      inConnection.includes(participant)
    );
    if (result) {
      store.dispatch(actions.setMessages(messages));
    }
  }
}
export default updateHistoryIfActive;
