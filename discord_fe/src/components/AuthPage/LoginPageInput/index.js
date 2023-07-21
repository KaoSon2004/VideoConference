import { Box } from "@mui/material";
import InputWithLabel from "../../shared/InputWithLabel";

const LoginPageInput = (props) => {
  const { mail, setMail, password, setPassword } = props;
  return (
    <Box sx={{ mt: "0.7rem" }}>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        placeholder="Enter your mail"
        type="text"
        label="Mail"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        placeholder="Enter your password"
        type="password"
        label="Password"
      />
    </Box>
  );
};
export default LoginPageInput;
