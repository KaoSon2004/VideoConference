import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import RedirectInfo from "../../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const LoginPageFooter = ({ isFormValid, handleLogin }) => {
  const navigate = useNavigate();
  const handleToRegister = () => {
    navigate("/register");
  };
  const handleToForgotPassword = () => {
    navigate("/forgotpassword");
  };
  return <div></div>;
};

export default LoginPageFooter;
