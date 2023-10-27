import AddFriendButton from "./AddFriendButton";
import FriendList from "./FriendList";

function FriendSidebar() {
  return (
    <div className="w-[300px] h-full flex flex-col items-center bg-[#2F3136]">
      <AddFriendButton />
      <FriendList />
    </div>
  );
}

export default FriendSidebar;
