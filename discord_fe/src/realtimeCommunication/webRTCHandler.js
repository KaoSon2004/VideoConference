import * as actions from "../store/actions";
import store from "../store/reducers/rootReducer";
import Peer from "simple-peer";
import * as socketServer from "./socketServer";

let peers = {};
const onlyAudio = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  audio: true,
  video: true,
};

const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO use TURN server credentials
  } else {
    console.warn("Using only STUN server");
    return {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };
  }
};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log("preparing new peer connection as initiator");
  } else {
    console.log("preparing new peer connection as not initiator");
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });

  peers[connUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      connUserSocketId: connUserSocketId,
    };

    socketServer.signalPeerData(signalData);
  });
  peers[connUserSocketId].on("stream", (remoteStream) => {
    // TODO
    // add new remote stream to our server store
    console.log("remote stream came from other user");
    console.log("direct connection has been established");
    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoteStream(remoteStream);
  });
};

const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  console.log(remoteStreams);
  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(actions.setRemoteStreams(newRemoteStreams));
};
export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};
export const getLocalStreamPreview = (onlyAu = false, callback) => {
  const constraint = onlyAu ? onlyAudio : defaultConstraints;
  navigator.mediaDevices
    .getUserMedia(constraint)
    .then((stream) => {
      store.dispatch(actions.setLocalStream(stream));
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const closeAllConnections = () => {
  console.log(peers);
  try {
    Object.entries(peers).forEach((mappedObject) => {
      const connUserSocketId = mappedObject[0];
      if (peers[connUserSocketId]) {
        peers[connUserSocketId].destroy();
        delete peers[connUserSocketId];
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export const handleParticipantLeftRoom = (data) => {
  try {
    const { connUserSocketId } = data;

    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }

    const remoteStreams = store.getState().room.remoteStreams;

    const newRemoteStreams = remoteStreams.filter(
      (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
    );

    store.dispatch(actions.setRemoteStreams(newRemoteStreams));
  } catch (error) {
    console.log(error);
  }
};
export const switchOutgoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
