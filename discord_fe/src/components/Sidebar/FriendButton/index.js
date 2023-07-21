import { Button, Tooltip } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";

function FriendButton() {
  const navigate = useNavigate();
  return (
    <Tooltip title={<h3>Bạn bè</h3>} placement="right" arrow>
      <Button
        onClick={() => navigate("/friends")}
        style={{
          width: "48px",
          height: "48px",
          minHeight: "0",
          color: "white",
          borderRadius: "15px",
          background: "linear-gradient(to left top,#6f3fcf,#1f78ff)",
          minWidth: "0",
          marginTop: "10px",
          padding: "0",
        }}
      >
        <PeopleIcon />
      </Button>
    </Tooltip>
  );
}

export default FriendButton;
