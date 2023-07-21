function sendErrDev(err, res) {
  res.status(err.statusCode).json({
    err,
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV == "DEVELOPMENT") {
    sendErrDev(err, res);
  } else {
  }

  next();
};
