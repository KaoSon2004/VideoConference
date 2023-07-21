import { Tooltip } from "@mui/material";
import { Button } from "@mui/material";
import Avatar from "../../shared/Avatar";
import * as roomHandler from "../../../realtimeCommunication/roomHandler";
import { useSelector } from "react-redux";
function ActiveRoomButton({ activeRoom }) {
  console.log(activeRoom);
  const { isInRoom } = useSelector((state) => state.room);
  const { participants, creator, username, roomId } = activeRoom;
  const handleJoinZoom = () => {
    if (participants.length < 4) {
      roomHandler.handleJoinRoom(roomId);
    }
  };

  const roomTitle = `Creator: ${username} Connected: ${participants.length}`;
  const disabled = participants > 3;
  return (
    <Tooltip title={<h3>{roomTitle}</h3>} placement="right" arrow>
      <Button
        disabled={disabled || isInRoom}
        onClick={handleJoinZoom}
        sx={{
          width: "48px",
          height: "48px",
          minHeight: "0",
          color: "white",
          borderRadius: "15px",
          backgroundColor: "#5865F2",
          minWidth: "0",
          marginTop: "10px",
          padding: "0",
        }}
      >
        <Avatar username={username} />
      </Button>
    </Tooltip>
  );
}
export default ActiveRoomButton;
