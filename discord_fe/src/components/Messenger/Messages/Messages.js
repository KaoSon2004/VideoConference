import React, { userRef, useEffect } from "react";
import { styled } from "@mui/system";
import { connect, useSelector } from "react-redux";
import Message from "./Message";
import DateSeparator from "./DateSeparator";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertDateToHumanReadable = (date, format) => {
  const dateString = date.split("T")[0].split("-");
  const dateObject = new Date(dateString[0], dateString[1] - 1, dateString[2]);
  const map = {
    mm: dateObject.getMonth() + 1,
    dd: dateObject.getDate(),
    yy: dateObject.getFullYear().toString().slice(-2),
    yyyy: dateObject.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const Messages = () => {
  const { chatDetails, messages } = useSelector((state) => state.chat);
  return (
    <MainContainer>
      {messages &&
        messages.map((message, index) => {
          const sameAuthor =
            index > 0 &&
            messages[index].author._id === messages[index - 1].author._id;

          const sameDay =
            index > 0 &&
            convertDateToHumanReadable(messages[index].date, "dd/mm/yy") ===
              convertDateToHumanReadable(messages[index - 1].date, "dd/mm/yy");

          return (
            <div key={message._id} style={{ width: "97%" }}>
              {(!sameDay || index === 0) && (
                <DateSeparator
                  date={convertDateToHumanReadable(
                    messages[index].date,
                    "dd/mm/yy"
                  )}
                />
              )}
              <Message
                content={message.content}
                username={message.author.username}
                sameAuthor={sameAuthor}
                date={convertDateToHumanReadable(
                  messages[index].date,
                  "dd/mm/yy"
                )}
                sameDay={sameDay}
              />
            </div>
          );
        })}
    </MainContainer>
  );
};

export default Messages;
