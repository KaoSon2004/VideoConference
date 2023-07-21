import { Button, Icon, IconButton, Tooltip, Typography } from "@mui/material";
import { Check, Clear } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as actions from "../../../store/actions";
import Avatar from "../../shared/Avatar";
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
          justifyContent: "space-between",
          width: "45%",
          height: "60px",
          padding: "10px 16px",
          alignItems: "center",
        }}
      >
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
              color: "#F2F3F5",
              marginLeft: "5px",
              flex: "1",
            }}
          >
            {username}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton
            sx={{
              color: "#afb4bb",
              backgroundColor: "#2B2D31",
              width: "36px",
              height: "36px",
              "&:hover": {
                color: "#239c55",
              },
            }}
            onClick={handleAcceptInvitation}
            disabled={disable}
            variant="filled"
          >
            <Check />
          </IconButton>
          <IconButton
            sx={{
              width: "36px",
              height: "36px",
              color: "#afb4bb",
              backgroundColor: "#2B2D31",
              "&:hover": {
                color: "#c93a3e",
              },
            }}
            onClick={handleRejectInvitation}
            disabled={disable}
            variant="filled"
          >
            <Clear />
          </IconButton>
        </Box>
      </Box>
    </Tooltip>
  );
}

export default PendingInvitationItem;
