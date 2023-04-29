import React, { useState, useEffect } from "react";

import VersionWarning from "../pages/versionwarningpage/Index";
import BrowserWarning from "../pages/broswerwarningpage/Index";
import {
  MINIMUM_CHROME_VERSION,
  MINIMUM_EDGE_VERSION,
  MINIMUM_FIREFOX_VERSION,
  MINIMUM_OPR_VERSION,
  MINIMUM_SAFARI_VERSION,
  MINIMUM_SAMSUNGBROWSER_VERSION,
} from "../constants/constants";

function ValidateBrowser() {
  const [showBrowserWarning, setShowBrowserWarning] = useState(false);
  const [showVersionWarning, setShowVersionWarning] = useState(false);

  const userBrowserInfo = navigator.userAgent;
  const findBrowser = userBrowserInfo.match(
    /([a-zA-Z]+)\/([\d.]+)(?!.*[a-zA-Z]\/[\d.]+)/
  );
  const browserName = findBrowser[1];
  const isOperaMini = userBrowserInfo.includes("Opera Mini");
  const isSamsungBrowser = userBrowserInfo.includes("SamsungBrowser");
  const isSarafi = userBrowserInfo.includes("Version");

  function browserChecking() {
    if (isOperaMini) {
      setShowBrowserWarning(true);
    }
  }

  function chromeChecking() {
    const findBrowser = userBrowserInfo.match(
      /([a-zA-Z]+)\/([\d.]+)(?!.*[a-zA-Z]\/[\d.]+)/
    );
    const browserName = findBrowser[1];
    const browserVersion = userBrowserInfo.match(/(Chrome)\/([\d.]+)/)[2];

    if (browserName === "Safari" && browserVersion < MINIMUM_CHROME_VERSION) {
      setShowVersionWarning(true);
    }
  }

  function safariChecking() {
    const findBrowser = userBrowserInfo.match(/Version\/(\d+\.\d+)\s+Safari/);
    const browserName = userBrowserInfo.match(
      /([a-zA-Z]+)\/([\d.]+)(?!.*[a-zA-Z]\/[\d.]+)/
    )[1];
    const browserVersion = findBrowser[1];

    if (browserName === "Sarafi" && browserVersion < MINIMUM_SAFARI_VERSION) {
      setShowVersionWarning(true);
    }
  }

  function samsungChecking() {
    const findBrowser = userBrowserInfo.match(/(SamsungBrowser)\/([\d.]+)/);
    const browserName = findBrowser[1];
    const samsungBrowserVersion = findBrowser[2];

    if (
      browserName === "SamsungBrowser" &&
      samsungBrowserVersion < MINIMUM_SAMSUNGBROWSER_VERSION
    ) {
      setShowVersionWarning(true);
    }
  }

  function edgFirefoxOprChecking() {
    const findBrowser = userBrowserInfo.match(
      /([a-zA-Z]+)\/([\d.]+)(?!.*[a-zA-Z]\/[\d.]+)/
    );
    const browserName = findBrowser[1];
    const browserVersion = parseFloat(findBrowser[2]);
    const browsers = [
      { name: "Edg", minVersion: MINIMUM_EDGE_VERSION },
      { name: "Firefox", minVersion: MINIMUM_FIREFOX_VERSION },
      { name: "OPR", minVersion: MINIMUM_OPR_VERSION },
    ];

    browsers.forEach(browser => {
      if (browserName === browser.name && browserVersion < browser.minVersion) {
        setShowVersionWarning(true);
      }
    });
  }

  useEffect(() => {
    browserChecking();
    if (browserName === "Safari" && isSamsungBrowser) {
      samsungChecking();
    } else if (browserName === "Safari" && isSarafi) {
      safariChecking();
    } else if (browserName === "Safari") {
      chromeChecking();
    } else {
      edgFirefoxOprChecking();
    }
  }, []);

  return (
    <>
      {showBrowserWarning && <BrowserWarning />}
      {showVersionWarning && <VersionWarning />}
    </>
  );
}

export default ValidateBrowser;
