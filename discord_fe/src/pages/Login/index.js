
import LoginForm from "./LoginForm";
import AuthBox from "../Share/AuthBox";

const Login = () => {

  return (
    // <div className="w-full h-screen relative">
    //   {openModal && (
    //     <ModalWrapper setValue={setOpenModal}>
    //       <ForgotPassword />
    //     </ModalWrapper>
    //   )}
    //   <div className="absolute top-0 right-0 w-full h-full z-0">
    //     <Theme />
    //   </div>
    //   <div className="w-[800px] h-[400px] bg-[#36393f] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex p-5">
    //     <div className=" pt-4 flex-4">
    //       <LoginForm setOpenModal={setOpenModal} />
    //     </div>
    //     <div className="flex-3"></div>
    //   </div>
    // </div>
    <AuthBox isLoginPage = {true}>
      <LoginForm />
    </AuthBox>
  );
};

export default Login;
