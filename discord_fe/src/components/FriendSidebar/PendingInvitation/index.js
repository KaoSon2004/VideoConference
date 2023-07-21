import { styled } from "@mui/system";
import PendingInvitationItem from "./PendingInvitationItem";
import { useSelector } from "react-redux";
const MainContainer = styled("div")({
  width: "100%",
  height: "20%",
});

function PendingInvitation() {
  const { pendingInvitation } = useSelector((state) => state.friend);

  return (
    <MainContainer>
      {pendingInvitation.map((invitation) => (
        <PendingInvitationItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          email={invitation.senderId.email}
        />
      ))}
    </MainContainer>
  );
}

export default PendingInvitation;
