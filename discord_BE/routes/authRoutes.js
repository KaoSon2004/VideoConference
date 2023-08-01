const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/register", authController.signUp);

router.get("/test", authController.protect, (req, res) => {
  res.end("Hello from test");
});

module.exports = router;
