import { Button, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../../realtimeCommunication/roomHandler";
function CreateRoomButton({ isInRoom }) {
  const CreateRoom = () => {
    roomHandler.createRoom(true, true);
  };
  return (
    <Tooltip title={<h3>Tạo phòng</h3>} placement="right" arrow>
      <Button
        style={{
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
        disabled={isInRoom}
        onClick={CreateRoom}
      >
        <AddIcon />
      </Button>
    </Tooltip>
  );
}

export default CreateRoomButton;
