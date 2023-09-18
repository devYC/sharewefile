const title = "Share We?";
const mobileWarningTitle =
  "Mobile application is not supported. Please use the web version instead";
const browserWarningTitle =
  "Please open a valid browser such as Safari, Chrome, Microsoft Edge, Firefox, Opera, Samsung Browser.";
const versionWarningTitle = "Please use the latest version of your browser.";
const notFoundTitle = "You should check URL address again";
const CHUNK_SIZE = 16384;
const MINIMUM_EDGE_VERSION = 79;
const MINIMUM_FIREFOX_VERSION = 44;
const MINIMUM_OPR_VERSION = 43;
const MINIMUM_SAFARI_VERSION = 11;
const MINIMUM_CHROME_VERSION = 56;
const MINIMUM_SAMSUNGBROWSER_VERSION = 4;

export {
  CHUNK_SIZE,
  MINIMUM_EDGE_VERSION,
  MINIMUM_FIREFOX_VERSION,
  MINIMUM_OPR_VERSION,
  MINIMUM_SAFARI_VERSION,
  MINIMUM_CHROME_VERSION,
  MINIMUM_SAMSUNGBROWSER_VERSION,
  title,
  mobileWarningTitle,
  browserWarningTitle,
  versionWarningTitle,
  notFoundTitle,
};

export const configuration = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" },
    {
      urls: "turn:3.39.84.168:3478?transport=tcp",
      username: "process.env.REACT_TURN_SERVER_USERNAME",
      credential: "process.env.REACT_TURN_SERVER_CREDENTIAL",
    },
  ],
};
