const express = require("express");
const http = require("http");

const mongoose = require("mongoose");

require("dotenv").config();
const socketServer = require("./socketServer");

const app = require("./app");

const PORT = process.env.PORT || process.env.API_PORT;

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
