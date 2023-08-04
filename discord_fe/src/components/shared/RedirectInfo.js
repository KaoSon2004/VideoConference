import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RedirectInfo = ({
  text,
  redirectText,

  handleRedirect,
}) => {
  return (
    <p className="text-[#72767d]">
      {text}
      <span
        className="text-[#00AFF4] font-thin cursor-pointer text-sm ml-1"
        onClick={handleRedirect}
      >
        {redirectText}
      </span>
    </p>
  );
};
export default RedirectInfo;
