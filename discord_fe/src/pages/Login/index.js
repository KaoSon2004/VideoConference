import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Theme from "../../assets/Theme";
import LoginForm from "./LoginForm";
import ModalWrapper from "../../components/shared/ModalWrapper";
import ForgotPassword from "../../components/Forgotpassword";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);
  return (
    <div className="w-full h-screen relative">
      {openModal && (
        <ModalWrapper setValue={setOpenModal}>
          <ForgotPassword />
        </ModalWrapper>
      )}
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <Theme />
      </div>
      <div className="w-[800px] h-[400px] bg-[#36393f] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex p-5">
        <div className=" pt-4 flex-4">
          <LoginForm setOpenModal={setOpenModal} />
        </div>
        <div className="flex-3"></div>
      </div>
    </div>
  );
};

export default Login;
