import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import { useSelector } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";
import MessageIcon from "@mui/icons-material/Message";
import DirectMessageButton from "./DirectMessageIcon";
import FriendButton from "./FriendButton";
import { useNavigate } from "react-router-dom";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

function Sidebar() {
  const { activeRooms, isInRoom } = useSelector((state) => state.room);
  const navigate = useNavigate();
  return (
    <MainContainer>
      <MainPageButton />
      <DirectMessageButton />
      <FriendButton />
      <CreateRoomButton isInRoom={isInRoom} />
      {activeRooms?.map((activeRoom) => (
        <ActiveRoomButton activeRoom={activeRoom} />
      ))}
    </MainContainer>
  );
}
export default Sidebar;
