import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import { useSelector } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";
import MessageIcon from "@mui/icons-material/Message";
import DirectMessageButton from "./DirectMessageIcon";
import FriendButton from "./FriendButton";




function Sidebar() {
  const { activeRooms, isInRoom } = useSelector((state) => state.room);
  return (
    <div className="w-[72px] h-full flex flex-col items-center bg-[#202225]">
      <MainPageButton />
      <DirectMessageButton />
      <FriendButton />
      <CreateRoomButton isInRoom={isInRoom} />
      {activeRooms?.map((activeRoom) => (
        <ActiveRoomButton activeRoom={activeRoom} />
      ))}
    </div>
  );
}
export default Sidebar;
