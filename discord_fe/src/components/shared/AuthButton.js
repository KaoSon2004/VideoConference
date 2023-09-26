function AuthButton ({onClick, isFormValid, text}) {
    return (
        <button
          onClick={onClick}
          className={`w-full ${
            !isFormValid && "opacity-70"
          }  bg-[#5865F2] text-white text-md py-1 rounded-sm ${
            isFormValid && "hover:opacity-80"
          } `}
          disabled={!isFormValid}
        >
          {text}
        </button>
    )
}
export default AuthButton;