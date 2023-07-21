import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../realtimeCommunication/socketServer";
import { useSelector } from "react-redux";
const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = () => {
  const { chatDetails, messages } = useSelector((state) => state.chat);
  useEffect(() => {
    console.log(chatDetails.id);
    getDirectChatHistory({
      receiverUserId: chatDetails.id,
    });
  }, [chatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
