import { useState } from "react";
import AddFriendDialog from "../AddFriendDialog";

import icons from "../../../utils/icons";
const {AiOutlineSearch, IoPersonAddOutline} = icons;

function AddFriendButton() {
  const [open, setIsOpen] = useState(false);
  const handleAddFriend = () => {
    setIsOpen(true);
  };
  return (
    <div className="w-full text-base">
      <div  className="w-full flex justify-center items-center px-2 py-3">
        <div className="relative  w-3/4  text-[#081c36] bg-[#eaedf0] pl-[30px] pr-3 rounded-sm ">
           <input className="outline-none w-full py-1  bg-transparent border-none" placeholder="Tìm kiếm" />
           <span className="items-center inline-flex w-[28px] h-full absolute top-1/2 left-1 translate-y-[-50%] bg-transparent cursor-pointer ">
              <AiOutlineSearch  />
           </span>
          
        </div>
        <span title="Thêm bạn" onClick={handleAddFriend} className="ml-4 cursor-pointer">
          <IoPersonAddOutline />
        </span>
        <AddFriendDialog openDialog={open} handleClose={() => setIsOpen(false)} />
      </div>

    </div>
  );
}

export default AddFriendButton;
