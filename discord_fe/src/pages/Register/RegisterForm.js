import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validateRegister from "../../utils/validateRegister";
import * as actions from "../../store/actions";
import InputWithLabel from "../../components/shared/InputWithLabel";
import RedirectInfo from "../../components/shared/RedirectInfo";
import AuthButton from "../../components/shared/AuthButton";
import DateInputs from "./DateInputs";
import validateDate from "../../utils/validateDate";

function RegisterForm () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { isLoggedIn } = useSelector((state) => state.auth);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const handleRegister = async () => {
      dispatch(
        actions.register({
          username,
          email,
          password,
        })
      );
    };
    useEffect(() => {

        setIsFormValid(validateRegister(email, password, username) && validateDate(day, month, year));
    
      }, [email, password, username, setIsFormValid, day, year, month]);
    useEffect(() => {
      if (isLoggedIn) {
        navigate("/dashboard");
      }
    }, [isLoggedIn]);
    return (

    <div className="w-full">
        {/* Login Header */}
        <div className="text-center">
            <p className="text-[#b9bbbe]">
            Create An Account
            </p>
        </div>

        <div>
            <InputWithLabel setValue={setEmail} label={"Email"} required = {true} />
            <InputWithLabel setValue={setUsername} label ={"Display Name"} required={true} />
            <InputWithLabel setValue={setPassword} label={"Password"} required = {true} type='password' />
            <DateInputs setDay={setDay} setMonth={setMonth} setYear={setYear}/>
        </div>
        <div className="mt-6">
            <AuthButton onClick={handleRegister} text="Register" isFormValid={isFormValid}/>
            <RedirectInfo
                redirectText="Already have an account ?"
                handleRedirect={() => navigate("/login")}
            />
        </div>

    </div>
    )
}

export default RegisterForm;