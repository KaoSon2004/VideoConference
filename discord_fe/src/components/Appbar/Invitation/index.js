import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
function Invitation() {
  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <EmailIcon />
      Lời mời kết bạn
    </Typography>
  );
}

export default Invitation;
