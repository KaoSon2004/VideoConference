import MessageIcon from "@mui/icons-material/Message";
import { Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DirectMessageButton = () => {
  const navigate = useNavigate();
  return (
    <Tooltip title={<h3>Tin nhắn trực tiếp</h3>} placement="right" arrow>
      <Button
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
        onClick={() => navigate("/dashboard")}
      >
        <MessageIcon />
      </Button>
    </Tooltip>
  );
};
export default DirectMessageButton;
