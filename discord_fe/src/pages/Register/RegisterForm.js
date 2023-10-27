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
  
    const { isLoggedIn, register_error } = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
            confirmPassword,
            dob: new Date(`${year}-${month}-${day}`)
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
            <p className="text-[#393a3c]">
            Create An Account
            </p>
        </div>

        <div>
            <InputWithLabel setValue={setEmail} label={"Email"} required = {true} />
            <InputWithLabel setValue={setUsername} label ={"Display Name"} required={true} />
            <InputWithLabel setValue={setPassword} label={"Password"} required = {true} type='password' />
            <InputWithLabel setValue={setConfirmPassword} label={"Confirm Password"} required type='password' />
            <DateInputs setDay={setDay} setMonth={setMonth} setYear={setYear}/>
        </div>
        <div className="mt-6">
            <AuthButton onClick={handleRegister} text="Register" isFormValid={isFormValid}/>
            {register_error && (
              <div>
                <span className="text-red-600">Gmail already exist</span>
              </div>
            )}
            <RedirectInfo
                redirectText="Already have an account ?"
                handleRedirect={() => navigate("/login")}
            />
        </div>

    </div>
    )
}

export default RegisterForm;