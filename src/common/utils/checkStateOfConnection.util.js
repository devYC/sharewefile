export function showStateOfSignaling(connection) {
  console.log(`Signaling state changed: ${connection.signalingState}`);
}

export function showStateOfIceConnection(connection) {
  connection.oniceconnectionstatechange = e => {
    console.log(`ICE connection state: ${connection.iceConnectionState}`);
  };
}
