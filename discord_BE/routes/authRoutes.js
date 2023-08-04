const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/register", authController.signUp);

router.post("/forgot-password", authController.forgotYourpassword);
router.post("/reset-password/:resetToken", authController.resetPassword);
router.post(
  "/update-current-password",
  authController.protect,
  authController.updateCurrentPassword
);

router.get("/test", authController.protect, (req, res) => {
  res.end("Hello from test");
});

module.exports = router;
