import React from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const MainContainer = styled("div")({
  position: "absolute",
  bottom: "4px",
  right: "10px",
});

const ResizeButton = ({ isRoomMinimized, roomResizeHandler, sx }) => {
  return (
    <IconButton style={{ color: "white" }} sx={sx} onClick={roomResizeHandler}>
      {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
    </IconButton>
  );
};

export default ResizeButton;
