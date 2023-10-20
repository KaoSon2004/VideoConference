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
  );
};
export default Register;
