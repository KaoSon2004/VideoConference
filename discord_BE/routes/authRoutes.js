const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth/authController");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator();
const verifyToken = require("../middleware/auth");

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

router.post(
  "/login",
  validator.body(loginSchema),
  authController.controller.postLogin
);
router.post(
  "/register",
  validator.body(registerSchema),
  authController.controller.postRegister
);

router.get("/test", verifyToken, (req, res) => {
  res.end("Hello from test");
});

module.exports = router;
