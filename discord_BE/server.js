const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
require("dotenv").config();
const socketServer = require("./socketServer");

const PORT = process.env.PORT || process.env.API_PORT;
const app = express();
const friendRouter = require("./routes/friendRoutes");

app.use(express.json());
app.use(cors());

//auth middleware
app.use("/api/auth", authRouter);
app.use("/api/friendInvitation", friendRouter);

const server = http.createServer(app);
socketServer.registerSocket(server);

const db = process.env.DB_URI.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(db, {})
  .then(() => {
    console.log("connected successfully");
    server.listen(PORT, () => {
      console.log(`Server is listinging on ${PORT}`);
    });
  })
  .catch(() => {
    console.log("connected failed");
  });
