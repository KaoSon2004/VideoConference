import React from "react";
import { styled } from "@mui/system";
import { connect, useSelector } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  display: "flex",
});

const Messenger = () => {
  const { chatDetails } = useSelector((state) => state.chat);
  return (
    <MainContainer>
      {!chatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chatDetails={chatDetails} />
      )}
    </MainContainer>
  );
};

export default Messenger;
