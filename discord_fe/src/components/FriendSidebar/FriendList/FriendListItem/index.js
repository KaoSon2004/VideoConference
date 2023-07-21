import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from "../../../shared/Avatar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import * as actions from "../../../../store/actions";

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft: "10px",
  marginTop: "5px",
  position: "relative",
});

function FriendListItem({ id, username, isOnline }) {
  const dispatch = useDispatch();
  const handleChooseChat = () => {
    dispatch(actions.setChatDetails({ id, name: username }));
  };
  return (
    <Wrapper onClick={handleChooseChat}>
      <Avatar username={username} />
      <Typography
        sx={{
          color: "white",
          marginLeft: "10px",
          color: "#8e9297",
        }}
        align="left"
      >
        {username}
      </Typography>
      {isOnline && (
        <Box
          sx={{
            color: "#3ba55d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "10px",
          }}
        >
          <FiberManualRecordIcon />
        </Box>
      )}
    </Wrapper>
  );
}

export default FriendListItem;
