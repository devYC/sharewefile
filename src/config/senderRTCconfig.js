import { io } from "socket.io-client";

const configuration = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" },
  ],
};
let isCalled = false;
const localConnection = new RTCPeerConnection(configuration);
const dataChannel = localConnection.createDataChannel("sendingchannel");
async function connectToSocket() {
  const senderSocket = io("http://192.168.219.103:3001");

  const connectEventPromise = new Promise(resolve => {
    senderSocket.on("connect", resolve);
  });

  await connectEventPromise;
  return senderSocket;
}

export default async function senderRTCconfig() {
  if (isCalled) {
    return;
  }

  isCalled = true;

  const socketOfSender = await connectToSocket();
  const localConnectionState = localConnection.signalingState;

  socketOfSender.on("receiving from client 2", async msg2 => {
    const receivedAnswer = JSON.parse(msg2);
    const sessionDescription = new RTCSessionDescription({
      type: receivedAnswer.type,
      sdp: receivedAnswer.sdp,
    });

    try {
      await localConnection.setRemoteDescription(sessionDescription);
    } catch (err) {
      console.warn(err);
    }
  });

  socketOfSender.on("ICE from client 2", async msg3 => {
    const receivedICE = JSON.parse(msg3);
    const candidate = new RTCIceCandidate({
      candidate: receivedICE.candidate,
      sdpMid: receivedICE.sdpMid,
      sdpMLineIndex: receivedICE.sdpMLineIndex,
    });

    try {
      await localConnection.addIceCandidate(candidate);
    } catch (err) {
      console.warn(err);
    }
  });

  async function createOffer() {
    try {
      const offer = await localConnection.createOffer();
      await localConnection.setLocalDescription(offer);
      socketOfSender.emit("client 1 SDP", JSON.stringify(offer));
    } catch (err) {
      console.warn(err);
    }
  }

  localConnection.addEventListener("icecandidate", e => {
    if (e.candidate) {
      socketOfSender.emit("client 1 ICE", JSON.stringify(e.candidate));
    }
  });

  createOffer();

  localConnection.addEventListener("iceconnectionstatechange", event => {
    console.log(`ICE connection state: ${localConnection.iceConnectionState}`);
  });

  localConnection.addEventListener("signalingstatechange", () => {
    console.log(`Signaling state changed: ${localConnection.signalingState}`);
  });
}

export { localConnection, dataChannel, connectToSocket };
