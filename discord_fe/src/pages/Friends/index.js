import { styled } from "@mui/system";
import Sidebar from "../../components/Sidebar";
import FriendSidebar from "../../components/FriendSidebar";
import Appbar from "../../components/Appbar";
import Messenger from "../../components/Messenger";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import { useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { socketServer } from "../../realtimeCommunication/socketServer";
import Room from "../../components/Room";
import { Box } from "@mui/material";
import Invitations from "../../components/Invitations";
const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Friends = () => {
  const { token } = useSelector((state) => state.auth);
  const { isInRoom } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Appbar />
        <Invitations />
      </Box>
      {isInRoom && <Room />}
    </Wrapper>
  );
};
export default Friends;
