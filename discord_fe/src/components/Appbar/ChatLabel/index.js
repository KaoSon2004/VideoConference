const { Typography, colors } = require("@mui/material");
const { useSelector } = require("react-redux");

function ChatLabel() {
  const { chatDetails } = useSelector((state) => state.chat);
  const name = chatDetails?.name;

  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {name ? name : ""}
    </Typography>
  );
}

export default ChatLabel;
