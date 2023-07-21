import React from "react";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";

import EmptyFriendMessage from "./EmptyFriendMessage";
import PendingInvitation from "./PendingInvitation";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  display: "flex",
  padding: "10px 16px",
});

const Invitations = () => {
  const { pendingInvitation } = useSelector((state) => state.friend);
  return (
    <MainContainer>
      {pendingInvitation.length == 0 ? (
        <EmptyFriendMessage />
      ) : (
        <PendingInvitation pendingInvitation={pendingInvitation} />
      )}
    </MainContainer>
  );
};

export default Invitations;
