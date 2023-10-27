import { styled } from "@mui/system";
import Sidebar from "../../components/Sidebar";
import Appbar from "../../components/Appbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Room from "../../components/Room";
import { Box } from "@mui/material";
import Invitations from "../../components/Invitations";
import FriendActionSideBar from "./FriendActionSideBar";


const Friends = () => {
  const { isInRoom } = useSelector((state) => state.room);

  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <FriendActionSideBar/>
      <div className="flex flex-col flex-1">
        <Appbar />
        <Invitations />
      </div>
      {isInRoom && <Room />}
    </div>
  );
};
export default Friends;
