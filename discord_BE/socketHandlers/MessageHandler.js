const Message = require("../model/message");
const Conversation = require("../model/conversation");
const chatUpdate = require("../socketHandlers/updates/chat");

const MessageHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId, content } = data;
    const message = await Message.create({
      content,
      author: userId,
      date: new Date(),
      type: "direct",
    });

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });
    if (conversation) {
      conversation.messages.push(message._id);
      await conversation.save();
      console.log(chatUpdate);
      chatUpdate.chat(conversation._id);
    } else {
      const newConversation = await Conversation.create({
        participants: [userId, receiverUserId],
        messages: [message._id],
      });
      chatUpdate.chat(newConversation._id);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = MessageHandler;
