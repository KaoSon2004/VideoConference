const Conversation = require("../../model/conversation");
const socketStore = require("../../socketStore");
const chat = async (conversationId) => {
  const conversation = await Conversation.findById(
    conversationId,
    (specificSocketId = null)
  ).populate({
    path: "messages",
    model: "Message",
    populate: {
      path: "author",
      model: "User",
      select: "username _id",
    },
  });
  if (conversation) {
    const io = socketStore.getServerSocketInstance();

    if (specificSocketId) {
      return io.to(con).emit("update-history", {
        messages: conversation.messages,
        participants: conversation.participants,
      });
    }
    conversation.participants.forEach((participant) => {
      const activeConnections = socketStore.getActiveConnections(
        participant._id.toString()
      );
      activeConnections.forEach((con) => {
        io.to(con).emit("update-history", {
          messages: conversation.messages,
          participants: conversation.participants,
        });
      });
    });
  }
};

module.exports = {
  chat,
};
