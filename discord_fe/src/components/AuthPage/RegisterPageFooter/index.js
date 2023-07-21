import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import RedirectInfo from "../../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
const RegisterPageFooter = ({ isFormValid, handleRegister }) => {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ mt: "0.3rem" }}>
      <CustomPrimaryButton
        label="Register"
        disabled={!isFormValid}
        onClick={handleRegister}
      ></CustomPrimaryButton>
      <RedirectInfo
        text="Already have an account? "
        redirectText="Log in"
        handleRedirect={handleToLogin}
        additionalStyle={{ marginTop: "5px" }}
      />
    </Box>
  );
};

export default RegisterPageFooter;
