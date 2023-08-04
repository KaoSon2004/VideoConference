import { useEffect, useState } from "react";

import validateLogin from "../../utils/validateLogin";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Theme from "../../assets/Theme";
import LoginForm from "./LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <Theme />
      </div>
      <div className="w-[800px] h-[400px] bg-[#36393f] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex p-5">
        <div className=" pt-4 flex-4">
          <LoginForm />
        </div>
        <div className="flex-3"></div>
      </div>
    </div>
  );
};

export default Login;
