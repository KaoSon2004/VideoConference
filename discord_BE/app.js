const express = require("express");
const cors = require("cors");

const app = express();
const authRouter = require("./routes/authRoutes");
const friendRouter = require("./routes/friendRoutes");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/appError");

app.use(express.json());
app.use(cors());

//auth middleware
app.use("/api/auth", authRouter);
app.use("/api/friendInvitation", friendRouter);

app.all("*", (req, res, next) => {
  next(new AppError("This route hasn't been defined yet", 404));
});

app.use(errorController);
module.exports = app;
