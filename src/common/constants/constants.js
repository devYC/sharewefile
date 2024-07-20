const title = "Share We?";
const mobile = "Mobile";
const operaMini = "Opera";
const browserWarningTitle =
  "Please open a valid browser such as Safari, Chrome, Microsoft Edge, Firefox, Opera in terms of desktop. In terms of mobile or tablet, please set the default browser as one of above.";
const versionWarningTitle = "Please update your browser to the latest version.";
const notFoundTitle = "You should check URL address again";
const CHUNK_SIZE = 16384;

const webBrowsers = [
  {
    name: "Edg",
    minimumVersion: 79,
  },
  {
    name: "Firefox",
    minimumVersion: 44,
  },
  {
    name: "OPR",
    minimumVersion: 43,
  },
  {
    name: "Safari",
    minimumVersion: 11,
  },
  {
    name: "Chrome",
    minimumVersion: 56,
  },
];
const mobileBrowsers = [
  {
    name: "Edg",
    minimumVersion: 120,
  },
  {
    name: "Firefox",
    minimumVersion: 122,
  },
  {
    name: "SamsungBrowser",
    minimumVersion: 4,
  },
  {
    name: "Safari",
    minimumVersion: 11,
  },
  {
    name: "Chrome",
    minimumVersion: 120,
  },
];

export {
  CHUNK_SIZE,
  title,
  browserWarningTitle,
  versionWarningTitle,
  notFoundTitle,
  mobile,
  operaMini,
  webBrowsers,
  mobileBrowsers,
};

export const configuration = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" },
    {
      urls: "turn:15.164.255.217:3478?transport=tcp",
      username: process.env.REACT_APP_TURN_SERVER_USERNAME,
      credential: process.env.REACT_APP_TURN_SERVER_CREDENTIAL,
    },
  ],
};
