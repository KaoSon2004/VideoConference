import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  Dialog,
  Typography,
  DialogActions,
  Box
} from "@mui/material";
import { useState, useEffect } from "react";
import InputWithLabel from "../../shared/InputWithLabel";
import { styled } from "@mui/system";
import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import * as actions from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Action from "../../../store/actions/actionTypes";

function AddFriendDialog({ openDialog, handleClose }) {
  const { token } = useSelector((state) => state.auth);
  const { invitationSentOk } = useSelector((state) => state.friend)
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();
  const handleCloseDialog = () => {
    handleClose();
    setMail("");
  };
  useEffect(() => {
    if (invitationSentOk == null) {
      return;
    }
    if (!invitationSentOk) {
      alert("Fail to send invitation. Please try again!");
    }
    dispatch({
      type: Action.CLOSE_FRIEND_INVITATION
    })
    handleClose();
  }, [invitationSentOk])

  const handleSendInvitation = () => {
    dispatch(
      actions.sendFriendInvitation({
        targetMail: mail,
        token,
      })
    );
  };
  return (
    <div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Friend Invitation</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Type your friend email to invite</Typography>
          </DialogContentText>
          <Box sx={{marginTop: "10px"}}>
            <InputWithLabel
              value={mail}
              setValue={setMail}
              label="Email address"
              type="text"
              placeholder="Email address"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{mx:"5px", mb: "10px"}}>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            label="Add Friend"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddFriendDialog;
