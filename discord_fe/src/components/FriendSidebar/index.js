import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendTitle from "./FriendTitle";
import PendingInvitation from "./PendingInvitation";
import FriendList from "./FriendList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

function FriendSidebar() {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendList />
    </MainContainer>
  );
}

export default FriendSidebar;
