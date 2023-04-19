import { io } from "socket.io-client";

const configuration = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" },
  ],
};

let isCalled = false;
const remoteConnection = new RTCPeerConnection(configuration);
async function connectToSocket() {
  const receiverSocket = io("http://192.168.219.103:3001");

  const connectEventPromise = new Promise(resolve => {
    receiverSocket.on("connect", resolve);
  });

  await connectEventPromise;
  return receiverSocket;
}

export default async function receiverRTCconfig() {
  if (isCalled) {
    return;
  }

  isCalled = true;

  const socketOfReceiver = await connectToSocket();

  async function createAnswer() {
    try {
      const answer = await remoteConnection.createAnswer();
      await remoteConnection.setLocalDescription(answer);

      socketOfReceiver.emit("client 2 SDP", JSON.stringify(answer));
    } catch (err) {
      console.warn(err);
    }
  }

  socketOfReceiver.on("receiving from client 1", async sdp => {
    const receivedOffer = JSON.parse(sdp);

    const sessionDescription = new RTCSessionDescription({
      type: receivedOffer.type,
      sdp: receivedOffer.sdp,
    });

    try {
      await remoteConnection.setRemoteDescription(sessionDescription);
    } catch (err) {
      console.warn(err);
    }
    createAnswer();
  });

  socketOfReceiver.on("ICE from client 1", async ICE => {
    const receivedICE = JSON.parse(ICE);
    const candidate = new RTCIceCandidate({
      candidate: receivedICE.candidate,
      sdpMid: receivedICE.sdpMid,
      sdpMLineIndex: receivedICE.sdpMLineIndex,
    });

    try {
      await remoteConnection.addIceCandidate(candidate);
    } catch (err) {
      console.warn(err);
    }
  });

  remoteConnection.addEventListener("icecandidate", e => {
    if (e.candidate) {
      socketOfReceiver.emit("client 2 ICE", JSON.stringify(e.candidate));
    }
  });

  remoteConnection.addEventListener("iceconnectionstatechange", event => {
    console.log(`ICE connection state: ${remoteConnection.iceConnectionState}`);
  });

  remoteConnection.addEventListener("signalingstatechange", () => {
    console.log(`Signaling state changed: ${remoteConnection.signalingState}`);
  });
}

export { remoteConnection, connectToSocket };
