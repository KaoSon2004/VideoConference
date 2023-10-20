
import LoginForm from "./LoginForm";
import AuthBox from "../Share/AuthBox";

const Login = () => {

  return (
    <AuthBox isLoginPage = {true}>
      <LoginForm />
    </AuthBox>
  );
};

export default Login;
