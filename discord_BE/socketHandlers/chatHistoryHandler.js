const Conversation = require("../model/conversation");
const chatUpdate = require("./updates/chat");

const chatHistoryHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId } = data;
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });
    if (conversation) {
      chatUpdate.chat(conversation._id, socket.id);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = chatHistoryHandler;
