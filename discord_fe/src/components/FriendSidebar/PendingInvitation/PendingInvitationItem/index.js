import { IconButton, Tooltip, Typography } from "@mui/material";
import Avatar from "../../../shared/Avatar";
import { Check, Clear } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../store/actions";
import { useState } from "react";
function PendingInvitationItem({ id, username, email }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [disable, setDisable] = useState(false);
  const handleAcceptInvitation = () => {
    dispatch(actions.acceptFriendInvitation({ id, token }));
    setDisable(true);
  };
  const handleRejectInvitation = () => {
    dispatch(actions.rejectFriendInvitation({ id, token }));
    setDisable(true);
  };
  return (
    <Tooltip title={email}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "7px",
          marginTop: "5px",
        }}
      >
        <Avatar username={username} />
        <Typography
          style={{
            color: "white",
            marginLeft: "5px",
            flex: "1",
          }}
        >
          {username}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <IconButton
            style={{
              color: "white",
            }}
            onClick={handleAcceptInvitation}
            disabled={disable}
          >
            <Check />
          </IconButton>
          <IconButton
            style={{
              color: "white",
            }}
            onClick={handleRejectInvitation}
            disabled={disable}
          >
            <Clear />
          </IconButton>
        </Box>
      </Box>
    </Tooltip>
  );
}

export default PendingInvitationItem;
