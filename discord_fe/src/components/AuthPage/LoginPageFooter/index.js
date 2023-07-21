import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import RedirectInfo from "../../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const LoginPageFooter = ({ isFormValid, handleLogin }) => {
  const navigate = useNavigate();
  const handleToRegister = () => {
    navigate("/register");
  };
  return (
    <Box sx={{ mt: "0.3rem" }}>
      <CustomPrimaryButton
        label="Log in"
        disabled={!isFormValid}
        onClick={handleLogin}
      ></CustomPrimaryButton>
      <RedirectInfo
        text="Need an account? "
        redirectText="Register"
        handleRedirect={handleToRegister}
        additionalStyle={{ marginTop: "10px" }}
      /></Box>
  );
};

export default LoginPageFooter;
