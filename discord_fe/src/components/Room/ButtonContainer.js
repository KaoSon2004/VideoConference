import React from "react";
import { styled } from "@mui/system";
import CloseRoomButton from "./RoomButtons/CloseRoomButton";
import { useSelector } from "react-redux";
import CameraButton from "./RoomButtons/CameraButton";
import MicButton from "./RoomButtons/MicButton";
import ScreenShareButton from "./RoomButtons/ScreenShareButton";
import { IconButton } from "@mui/material";
import ResizeButton from "./ResizeButton";

const MainContainer = styled("div")({
  height: "15%",
  maxHeight: "60px",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flex: "0 1 auto"
});

const ButtonContainer = ({ isRoomMinimized, roomResizeHandler }) => {
  const { localStream } = useSelector((state) => state.room);
  return (
    <MainContainer>
      {/* {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />} */}
      {/* Hidden resize button with same width to do alignment */}
      <ResizeButton sx={{marginRight: "auto", visibility:"hidden"}} isRoomMinimized={isRoomMinimized} />
      <ScreenShareButton />
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {/* {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />} */}
      <CameraButton localStream={localStream} />
      <ResizeButton sx={{marginLeft: "auto"}}
        isRoomMinimized={isRoomMinimized}
        roomResizeHandler={roomResizeHandler}
      />
    </MainContainer>
  );
};

export default ButtonContainer;
