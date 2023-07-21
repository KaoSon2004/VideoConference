import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Avatar from "../../shared/Avatar";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "60px",
  justifyContent: "center",
  alignItems: "center",
  display: "flex"
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#DCDDDE",
  marginLeft: "10px",
  marginTop: "0.2rem"
});

const SameAuthorMessageContent = styled("div")({
  color: "#DCDDDE",
  width: "97%",
  marginTop: "0.2rem"
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "70px"
});

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white", marginLeft: "10px" }}>
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d", marginLeft: "2px" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
