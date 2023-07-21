import { useEffect, useState } from "react";
import AuthBox from "../../components/shared/AuthBox";
import LoginPageFooter from "../../components/AuthPage/LoginPageFooter";
import LoginPageHeader from "../../components/AuthPage/LoginPageHeader";
import LoginPageInput from "../../components/AuthPage/LoginPageInput";
import validateLogin from "../../utils/validateLogin";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLogin(mail, password));
  }, [mail, password, setIsFormValid]);
  const handleLogin = () => {
    dispatch(
      actions.login({
        email: mail,
        password,
      })
    );
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default Login;
