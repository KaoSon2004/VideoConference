import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome back
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
        }}
      >
        Please login to start chatting and calling!
      </Typography>
    </div>
  );
};
export default LoginPageHeader;
