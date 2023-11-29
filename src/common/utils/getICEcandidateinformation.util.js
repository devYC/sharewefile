export default function getRTCIceCandidate(ice) {
  if (!ice) return null;

  return new RTCIceCandidate({
    candidate: ice.candidate,
    sdpMid: ice.sdpMid,
    sdpMLineIndex: ice.sdpMLineIndex,
  });
}
