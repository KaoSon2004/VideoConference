import { useSelector } from "react-redux";
import Theme from "../../../assets/Theme";
import ForgotPassword from "../../../components/Forgotpassword";
import ModalWrapper from "../../../components/shared/ModalWrapper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AuthBox({children, isLoginPage = false, isRegPage = false}) {
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
            <div className={(isLoginPage ?  'h-[400px] w-[800px]' : 'h-screen w-[480px]') + ` bg-[#36393f] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex p-5`}>
                <div className={`pt-4 ${isLoginPage ? 'flex-4' : 'w-full'}`}>
                    {children}
                </div>
                {isLoginPage && 
                    <div className="flex-3"></div>
                }
            </div>

        </div>
    )
}
export default AuthBox