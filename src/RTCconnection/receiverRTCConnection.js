import { configuration } from "../common/constants/constants";
import {
  connectToSocket,
  setRemoteDescription,
  useIceCandidateFinder,
  useSetIceCandidate,
  createAnswer,
} from "../common/utils/webSocket.util";
import {
  showStateOfIceConnection,
  showStateOfSignaling,
} from "../common/utils/checkStateOfConnection.util";

let isCalled = false;
const remoteConnection = new RTCPeerConnection(configuration);

export default async function receiverRTCconnection() {
  if (isCalled) return;
  isCalled = true;

  const socketOfReceiver = await connectToSocket();

  useSetIceCandidate(
    remoteConnection,
    socketOfReceiver,
    "receiving sender ICE"
  );
  useIceCandidateFinder(remoteConnection, socketOfReceiver, "receiver ICE");
  setRemoteDescription(remoteConnection, socketOfReceiver);
  createAnswer(remoteConnection, socketOfReceiver);
  showStateOfIceConnection(remoteConnection);
  showStateOfSignaling(remoteConnection);
}

export { remoteConnection };
