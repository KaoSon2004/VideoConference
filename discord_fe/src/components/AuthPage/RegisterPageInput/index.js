import InputWithLabel from "../../shared/InputWithLabel";
import { Box } from "@mui/material";

const RegisterPageInput = ({
  mail,
  setMail,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <Box sx={{ mt: "0.7rem" }}>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email address"
        placeholder="Enter your mail e.g john@outlook.com"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        placeholder="Enter your username (6-12 characters)"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password (6-12 characters)"
      />
    </Box>
  );
};

export default RegisterPageInput;
