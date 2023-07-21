const jwt = require("jsonwebtoken");

function authSocket(socket, next) {
  const token = socket.handshake.auth?.token;
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_ENV);
    socket.user = decoded;
  } catch (error) {
    const socketError = new Error("Invalid Token");
    next(socketError);
    //aaaa
  }
  next();
}
module.exports = authSocket;
