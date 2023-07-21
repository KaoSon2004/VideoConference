import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";
import { useSelector } from "react-redux";
const MainContainer = styled("div")({
  width: "100%",
  flex: 1,
});
function CheckOnline(friends, onlineUsers) {
  friends.forEach((f) => {
    f.isOnline = !!onlineUsers.find((onlineUser) => onlineUser.userId == f.id);
  });
  return friends;
}

function FriendList() {
  const { friends, onlineUsers } = useSelector((state) => state.friend);
  return (
    <MainContainer sx={{ px: "5px" }}>
      {CheckOnline(friends, onlineUsers).map((f) => (
        <FriendListItem
          id={f.id}
          key={f.id}
          username={f.username}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
}
export default FriendList;
