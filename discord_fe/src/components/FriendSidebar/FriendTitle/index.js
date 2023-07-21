import { Typography } from "@mui/material";

function FriendTitle({ title }) {
  return (
    <Typography
      sx={{
        fontSize: "14px",
        textTransform: "uppercase",
        color: "#8e9297",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
}
export default FriendTitle;
