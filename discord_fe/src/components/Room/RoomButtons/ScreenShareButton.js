import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import * as actions from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import * as webRTCHandler from "../../../realtimeCommunication/webRTCHandler";

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = () => {
  const dispatch = useDispatch();
  const { localStream, screenSharingStream, isScreenSharingActive } =
    useSelector((state) => state.room);
  console.log(isScreenSharingActive);
  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "error occured when trying to get an access to screen share stream"
        );
      }
      if (stream) {
        dispatch(actions.setScreenSharingStream(stream));
        webRTCHandler.switchOutgoingTracks(stream);
      }
    } else {
      webRTCHandler.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((t) => t.stop());
      dispatch(actions.setScreenSharingStream(null));
    }
  };

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
