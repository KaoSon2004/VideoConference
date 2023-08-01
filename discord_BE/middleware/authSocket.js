const jwt = require("jsonwebtoken");
const util = require("util");

const authSocket = async (socket, next) => {
  const token = socket.handshake.auth?.token;
  try {
    const decoded = await util.promisify(jwt.verify)(
      token,
      process.env.SECRET_KEY
    );
    socket.user = decoded;
  } catch (error) {
    const socketError = new Error("Invalid Token");
    next(socketError);
  }
  next();
};
module.exports = authSocket;
