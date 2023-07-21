const express = require("express");
const router = express.Router();

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator();
const verifyToken = require("../middleware/auth");
const friendInvitationController = require("../controllers/friendInvitation/friendInvitationController");
const postLoginSchema = Joi.object({
  targetMail: Joi.string().email(),
});

const postAcceptSchema = Joi.object({
  id: Joi.string().required(),
});

const postRejectSchema = Joi.object({
  id: Joi.string().required(),
});

router.post(
  "/invite",
  verifyToken,
  validator.body(postLoginSchema),
  friendInvitationController.controller.postInvite
);
router.post(
  "/accept",
  verifyToken,
  validator.body(postAcceptSchema),
  friendInvitationController.controller.postAccept
);
router.post(
  "/reject",
  verifyToken,
  validator.body(postRejectSchema),
  friendInvitationController.controller.postReject
);
module.exports = router;
