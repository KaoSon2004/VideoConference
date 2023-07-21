import AuthBox from "../../components/shared/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInput from "../../components/AuthPage/RegisterPageInput";
import { useState, useEffect } from "react";
import RegisterPageFooter from "../../components/AuthPage/RegisterPageFooter";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validateRegister from "../../utils/validateRegister";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const handleRegister = async () => {
    dispatch(
      actions.register({
        username,
        email: mail,
        password,
      })
    );
  };
  useEffect(() => {
    setIsFormValid(validateRegister(mail, password, username));
  }, [mail, password, username, setIsFormValid]);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};
export default Register;
