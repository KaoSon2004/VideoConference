import { Typography } from "@mui/material";
import { styled } from "@mui/system";
const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: "500",
  cursor: "pointer",
});
const RedirectInfo = ({
  text,
  redirectText,
  additionalStyle,
  handleRedirect,
}) => {
  return (
    <Typography
      sx={{
        color: "#72767d",
      }}
      style={additionalStyle ? additionalStyle : {}}
    >
      {text}
      <RedirectText onClick={handleRedirect}>{redirectText}</RedirectText>
    </Typography>
  );
};
export default RedirectInfo;
