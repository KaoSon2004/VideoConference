import { useNavigate } from "react-router-dom"
import icons from "../../utils/icons"

const {
    BsEnvelopeOpen,
    FaUserFriends
} = icons
function FriendActionSideBar() {
    const navigate = useNavigate();
    return (
        <div className="w-[250px] h-full flex flex-col gap-5 bg-[#2F3136] px-4 ">
            <div 
                className="flex items-center gap-3 cursor-pointer mt-5 hover:bg-opacity-30"
                onClick={() => navigate('list')}
            >
                <FaUserFriends className="inline-block w-[30px] h-[18px]" />
                <p className="text-sm">
                    Danh sách bạn bè
                </p>
            </div>
            <div 
                className="flex  items-center gap-3 cursor-pointer" 
                onClick={() => navigate('invitations')}
            >
                <BsEnvelopeOpen className="inline-block w-[30px] h-[18px] " />
                <p className="text-sm">
                    Lời mời kết bạn
                </p>
            </div>
        </div>
    )
}

export default FriendActionSideBar