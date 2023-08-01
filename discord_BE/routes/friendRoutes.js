const express = require("express");
const router = express.Router();

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator();

const friendInvitationController = require("../controllers/friendInvitationController");
const authController = require("../controllers/authController");

// const postLoginSchema = Joi.object({
//   targetMail: Joi.string().email(),
// });

// const postAcceptSchema = Joi.object({
//   id: Joi.string().required(),
// });

// const postRejectSchema = Joi.object({
//   id: Joi.string().required(),
// });

router.post(
  "/invite",
  authController.protect,
  // validator.body(postLoginSchema),
  friendInvitationController.sendInvite
);
router.post(
  "/accept",
  authController.protect,
  // validator.body(postAcceptSchema),
  friendInvitationController.accept
);
router.post(
  "/reject",
  authController.protect,
  // validator.body(postRejectSchema),
  friendInvitationController.reject
);
module.exports = router;
