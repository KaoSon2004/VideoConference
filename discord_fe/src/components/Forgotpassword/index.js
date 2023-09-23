import { useEffect, useRef, useState } from "react";
import InputWithLabel from "../shared/InputWithLabel";
import { validateEmail } from "../../utils/validateLogin";
import * as apis from "../../service";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [success, setSuccess] = useState(false);
  const successMessage = useRef();
  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email]);
  async function handleSendRequest() {
    const response = await apis.forgotPassword({ email });
    successMessage.current = `Reset token already sent to  ${email}. Please check your inbox and spam`;
    if (response.status == 200) {
      setSuccess(true);
    }
  }
  return (
    <div className="w-[440px] h-[200px] bg-[#313338]  rounded-md flex flex-col">
      {success ? (
        <div className="p-4">
          <h3 className="text-start text-xl">Request Sent</h3>
          <p className="mt-2">{successMessage.current}</p>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-5 ">
            <h3 className="text-center text-xl">Forgot Password</h3>
            {/* value, setValue, type, label, required */}
            <InputWithLabel
              value={email}
              setValue={setEmail}
              type="text"
              placeholder="Enter your email"
            />
          </div>

          {/* Body */}
          <div className="bg-[#2b2d31] flex-1 flex items-center justify-end">
            <button
              onClick={handleSendRequest}
              className={`px-1 py-2 ${
                !isFormValid && "opacity-70"
              }  bg-[#5865F2] text-white text-md py-1 rounded-sm ${
                email && "hover:opacity-80 "
              }  mr-4 `}
              disabled={!isFormValid}
            >
              Send Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
