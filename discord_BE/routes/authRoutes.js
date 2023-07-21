const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth/authController");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator();
const verifyToken = require("../middleware/auth");

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

router.post(
  "/login",
  validator.body(loginSchema),
  authController.controller.postLogin
);
router.post("/register", authController.controller.postRegister);

router.get("/test", verifyToken, (req, res) => {
  res.end("Hello from test");
});

module.exports = router;
