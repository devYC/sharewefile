import { io } from "socket.io-client";
import getRTCIceCandidate from "./getICEcandidateinformation.util";
import getSDP from "./getSessionDescription.util";

export const connectToSocket = () => {
  const connector = io(process.env.REACT_APP_SERVER_URL);
  return connector;
};

export function useIceCandidateFinder(connection, socket, iceEventName) {
  connection.onicecandidate = e => {
    socket.emit(iceEventName, JSON.stringify(e.candidate));
  };
}

export function useSetIceCandidate(connection, socket, iceEventName) {
  socket.on(iceEventName, async info => {
    const receivedICE = JSON.parse(info);
    const candidate = getRTCIceCandidate(receivedICE);

    try {
      await connection.addIceCandidate(candidate);
    } catch (err) {
      console.warn(err);
    }
  });
}

export async function setLocalDescription(localConnection, socketOfSender) {
  socketOfSender.on("receiving receiver SDP", async answer => {
    const receivedAnswer = JSON.parse(answer);
    const sessionDescription = getSDP(receivedAnswer);

    try {
      await localConnection.setRemoteDescription(sessionDescription);
    } catch (err) {
      console.warn(err);
    }
  });
}

export function setRemoteDescription(remoteConnection, socketOfReceiver) {
  return new Promise((resolve, reject) => {
    socketOfReceiver.on("receiving sender SDP", async offer => {
      const receivedOffer = JSON.parse(offer);
      const sessionDescription = getSDP(receivedOffer);
      try {
        await remoteConnection.setRemoteDescription(sessionDescription);
        resolve();
      } catch (err) {
        console.warn(err);
        reject(err);
      }
    });
  });
}

export async function createOffer(localConnection, socketOfSender) {
  try {
    const offer = await localConnection.createOffer();
    await localConnection.setLocalDescription(offer);
    socketOfSender.emit("sender SDP", JSON.stringify(offer));
  } catch (err) {
    console.warn(err);
  }
}

export async function createAnswer(remoteConnection, socketOfReceiver) {
  try {
    await setRemoteDescription(remoteConnection, socketOfReceiver);
    const answer = await remoteConnection.createAnswer();
    await remoteConnection.setLocalDescription(answer);
    socketOfReceiver.emit("receiver SDP", JSON.stringify(answer));
  } catch (err) {
    console.warn(err);
  }
}
