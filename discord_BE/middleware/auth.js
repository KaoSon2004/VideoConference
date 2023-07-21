const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("body", req.body, "query", req.headers);
  let token = req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    return res.status(403).json({
      status: "fail",
      message: "A token is need to authorization",
    });
  }

  try {
    token = token.replace(/Bearer\s+/, "");
    const decoded = jwt.verify(token, process.env.TOKEN_ENV);
    req.user = decoded;
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      status: "fail",
      message: "Unauthorization",
    });
  }
  next();
};
module.exports = verifyToken;
