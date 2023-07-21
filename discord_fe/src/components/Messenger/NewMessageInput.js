import React, { useState } from "react";
import { styled } from "@mui/system";
import { connect, useSelector } from "react-redux";
import { sendDirectMessage } from "../../realtimeCommunication/socketServer";
const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
});

const NewMessageInput = () => {
  const { chatDetails } = useSelector((state) => state.chat);
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chatDetails.id,
        content: message,
      });
      setMessage("");
    }
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chatDetails?.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

export default NewMessageInput;
