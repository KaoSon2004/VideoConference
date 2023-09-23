import { useNavigate } from "react-router-dom";
import InputWithLabel from "../../components/shared/InputWithLabel";
import RedirectInfo from "../../components/shared/RedirectInfo";
import { useEffect, useState } from "react";
import { validateLogin } from "../../utils/validateLogin";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

function LoginForm({ setOpenModal }) {
  const { login_error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLogin(email, password));
  }, [email, password, setIsFormValid]);
  const handleLogin = () => {
    dispatch(
      actions.login({
        email,
        password,
      })
    );
  };
  return (
    <div>
      {/* Login Header */}
      <div className="text-center">
        <h5 className="text-white text-2xl">Welcome back</h5>
        <p className="text-[#b9bbbe]">
          Please login to start chatting and calling!
        </p>
      </div>

      {/* Login Inputs */}
      <div>
        <InputWithLabel
          value={email}
          setValue={setEmail}
          label="Email"
          type="text"
          required={true}
        />
      </div>
      {/* Login Password */}
      <div>
        <InputWithLabel
          value={password}
          setValue={setPassword}
          label="Password"
          type="password"
          required={true}
        />
      </div>
      {/* ErrorMessage */}
      {login_error && (
        <div>
          <span className="text-red-600">Invalid Username Or Password</span>
        </div>
      )}
      {/* Forget password */}
      <div className="mt-3">
        {/* <RedirectInfo
          text=""
          redirectText="Forgot your password?"
          handleRedirect={() => navigate("/forgotpassword")}
        /> */}
        <div
          className="text-[#00AFF4] font-thin cursor-pointer text-sm ml-1"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Forgot your password?
        </div>
      </div>

      {/* Login Button */}
      <div className="mt-4">
        <button
          onClick={handleLogin}
          className={`w-full ${
            !isFormValid && "opacity-70"
          }  bg-[#5865F2] text-white text-md py-1 rounded-sm ${
            isFormValid && "hover:opacity-80"
          } `}
          disabled={!isFormValid}
        >
          Login
        </button>
      </div>

      <div>
        <RedirectInfo
          text="Need an account?"
          redirectText="Register"
          handleRedirect={() => navigate("/register")}
        />
      </div>
    </div>
  );
}
export default LoginForm;
