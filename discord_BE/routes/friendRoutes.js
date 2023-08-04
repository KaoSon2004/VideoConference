const express = require("express");
const router = express.Router();

const friendInvitationController = require("../controllers/friendInvitationController");
const authController = require("../controllers/authController");

router.post(
  "/invite",
  authController.protect,

  friendInvitationController.sendInvite
);
router.post(
  "/accept",
  authController.protect,

  friendInvitationController.accept
);
router.post(
  "/reject",
  authController.protect,

  friendInvitationController.reject
);
module.exports = router;
