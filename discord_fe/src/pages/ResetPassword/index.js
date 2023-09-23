import {  useNavigate, useParams } from "react-router-dom";
import InputWithLabel from "../../components/shared/InputWithLabel";
import Theme from "../../assets/Theme";
import { useEffect, useState, useRef } from "react";
import * as apis from "../../service";
import { validatePassword } from "../../utils/validateLogin";
let time;
const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [isValidInput, setIsValidInput] = useState(true);
    const [failReset, setFailReset] = useState(false);

    const params = useParams();
    const token = params.token;
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    useEffect(() => {
        setIsFormValid(validatePassword(password)  && validatePassword(confirmPassword));
    },[password, confirmPassword])

    const handleReset = async () => {
        if(password != confirmPassword ) {
            setIsValidInput(false);
        } else {
            setIsValidInput(true);
            const payload = {
                token, 
                password, 
                confirmPassword
            }
            try {
                const res = await apis.resetPassword(payload);
                console.log(res);
                if(res.status == 200) {
                    setSuccess(true);
                }
            } catch (error) {
                setSuccess(false);
                setFailReset(true);
                console.log(error)
            }
        }
    }
    useEffect(() => {
        
        if(success == true) {
            time = setTimeout(() => {
                setCount(prev => prev - 1);
            }, 1000)
            if(count == 0) {
                navigate("/login");
            }
        }
        return () => clearTimeout(time);
    }, [success, count])
    return (
        <div className="w-full h-screen relative">
            {/* Theme */}
            <div className="absolute inset-0">
                <Theme />
            </div>
            <div className="w-[800px] h-[400px] bg-[#36393f] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex p-5 rounded-md">
                {
                    !success ?  <div className="pt-4 w-full">
                    <h3 className="text-center text-2xl uppercase">
                        Reset Password
                    </h3>
                    <InputWithLabel label={"Password"} value={password} setValue ={setPassword} type="password" required={true} />
                    <InputWithLabel label={"Confirm Password"} value={confirmPassword} setValue ={setComfirmPassword}  type="password"  required={true} />
                    <button
                        onClick={handleReset}
                        className={`w-full mt-10 ${
                            !isFormValid && "opacity-70"
                        }  bg-[#5865F2] text-white text-md py-1 rounded-sm ${
                            isFormValid && "hover:opacity-80"
                        } `}
                        disabled={!isFormValid}
                        >
                        Reset Password
                    </button>
                    {!isValidInput &&  <p className="text-red-500 mt-4">Passwords are not the same </p>}
                    {failReset &&  <p className="text-red-500 mt-4">Token expired or invalid</p>}
                </div>
                :
                <div className="w-full h-full flex flex-col items-center ">
                    <h3>
                        Password changed successfully
                    </h3>
                    <h4>
                        You will be navigated in {count}
                    </h4>
                </div>
                }
                
               
            </div>
        </div>

    )
}

export default ResetPassword