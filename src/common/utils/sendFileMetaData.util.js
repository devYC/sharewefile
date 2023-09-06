export default function fileInformationSender(file, dataChannel) {
  if (file && dataChannel) {
    const fileInformation = {
      name: file.name,
      type: file.type,
      size: file.size,
    };
    dataChannel.send(JSON.stringify(fileInformation));
  }
}
