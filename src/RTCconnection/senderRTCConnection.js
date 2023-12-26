import { configuration } from "../common/constants/constants";
import {
  useIceCandidateFinder,
  connectToSocket,
  createOffer,
  setLocalDescription,
  useSetIceCandidate,
} from "../common/utils/webSocket.util";
import {
  showStateOfIceConnection,
  showStateOfSignaling,
} from "../common/utils/checkStateOfConnection.util";

let isCalled = false;
console.log(JSON.stringify(configuration));
const localConnection = new RTCPeerConnection(configuration);
const dataChannel = localConnection.createDataChannel("sendingchannel");

export default async function senderRTCconnection() {
  if (isCalled) return;
  isCalled = true;

  const socketOfSender = await connectToSocket();

  useIceCandidateFinder(localConnection, socketOfSender, "sender ICE");
  useSetIceCandidate(localConnection, socketOfSender, "receiving receiver ICE");
  createOffer(localConnection, socketOfSender);
  setLocalDescription(localConnection, socketOfSender);
  showStateOfIceConnection(localConnection);
  showStateOfSignaling(localConnection);
}

export { localConnection, dataChannel };
