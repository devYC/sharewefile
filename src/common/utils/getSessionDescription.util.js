export default function getSDP(description) {
  return new RTCSessionDescription({
    type: description.type,
    sdp: description.sdp,
  });
}
