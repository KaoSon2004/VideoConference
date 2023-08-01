const friendInvitation = require("../model/friendInvitation");
const User = require("../model/user");
const friendUpdate = require("../socketHandlers/updates/friends");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const updateFriend = require("../socketHandlers/updates/friends");

exports.sendInvite = catchAsync(async (req, res, next) => {
  const { targetMail } = req.body;
  if (!targetMail) {
    return next(
      new AppError("Please provide friend email you want to send", 400)
    );
  }

  const { email, _id: userId } = req.user;

  if (email.toLowerCase() == targetMail.toLowerCase()) {
    return next(new AppError("You can not send invitation to your self", 409));
  }
  const targetUser = await User.findOne({
    email: targetMail,
  });
  if (!targetUser) {
    return res
      .status(404)
      .send("Account not exists. Please check email address");
  }
  const InvitationAlreadySent = await friendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });
  if (InvitationAlreadySent) {
    return next(new AppError("Invitation Already Sent", 409));
  }
  const AlreadyFriend = await targetUser.friends.find(
    (friendId) => friendId == userId
  );
  if (AlreadyFriend) {
    return next(new AppError("User Already Friend", 409));
  }

  const newInvitation = await friendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  friendUpdate.pendingFriendInvitation(targetUser._id);

  return res.status(201).json({
    status: "success",
    message: "Invitation sent",
  });
});
exports.accept = catchAsync(async (req, res, next) => {
  const { id } = req.body;
  const invitation = await friendInvitation.findById(id);
  if (!invitation) {
    return next(
      new AppError("Something went wrong. Invitation doesn't exits", 404)
    );
  }
  const { senderId, receiverId } = invitation;

  const senderUser = await User.findById(senderId);
  senderUser.friends = [...senderUser.friends, receiverId];
  const receiverUser = await User.findById(receiverId);
  receiverUser.friends = [...receiverUser.friends, senderId];

  await senderUser.save({ validateBeforeSave: false });
  await receiverUser.save({ validateBeforeSave: false });

  await friendInvitation.findByIdAndDelete(id);

  await updateFriend.pendingFriendInvitation(receiverId.toString());

  await updateFriend.friends(receiverId.toString());
  await updateFriend.friends(senderId.toString());

  return res.status(200).send("Accept Successfully");
});
exports.reject = catchAsync(async (req, res, next) => {
  const { _id: userId } = req.user;
  const { id } = req.body;
  const invitationExisted = await friendInvitation.exists({ _id: id });
  if (invitationExisted) {
    await friendInvitation.findByIdAndDelete(id);
  }
  console.log(userId);
  await updateFriend.pendingFriendInvitation(userId);
  return res.status(200).json({
    status: "success",
  });
});
