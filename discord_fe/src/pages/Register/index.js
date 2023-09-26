import RegisterPageInput from "../../components/AuthPage/RegisterPageInput";
import { useState, useEffect } from "react";
import RegisterPageFooter from "../../components/AuthPage/RegisterPageFooter";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validateRegister from "../../utils/validateRegister";
import AuthBox from "../Share/AuthBox";
import RegisterForm from "./RegisterForm";
const Register = () => {

  return (
    <AuthBox>
      <RegisterForm />
    </AuthBox>
    // <AuthBox>
    //   <Typography variant="h5" sx={{ color: "white" }}>
    //     Create an account
    //   </Typography>
    //   <RegisterPageInput
    //     mail={mail}
    //     setMail={setMail}
    //     password={password}
    //     setPassword={setPassword}
    //     username={username}
    //     setUsername={setUsername}
    //   />
    //   <RegisterPageFooter
    //     isFormValid={isFormValid}
    //     handleRegister={handleRegister}
    //   />
    // </AuthBox>
  );
};
export default Register;
