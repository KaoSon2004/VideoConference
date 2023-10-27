import { Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import icons from "../../../utils/icons";
const { GiThreeFriends,} = icons
function FriendButton() {
  const navigate = useNavigate();
  return (
    
      <button
        onClick={() => navigate("/friends")}
        className="w-[48px] h-[48px] text-white text-2xl mx-auto rounded-2xl bg-gradient-to-tl from-[#6f3fcf] to-[#1f78ff] mt-3"
      >
        <GiThreeFriends className="inline-block" />
      </button>
   
  );
}

export default FriendButton;
