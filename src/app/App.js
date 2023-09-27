import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../components/pages/mainpage/mainPage";
import Sender from "../components/pages/senderpage/senderPage";
import Receiver from "../components/pages/receiverpage/receiverPage";
import NotFound from "../components/pages/notfoundpage/notFoundPage";
import MobileWarningPage from "../components/pages/mobilewarningpage/mobileWarningPage";
import BrowserWarning from "../components/pages/browserwarningpage/browserWarningPage";
import VersionWarning from "../components/pages/versionwarningpage/versionWarningPage";
import "./styles.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sender" element={<Sender />} />
        <Route exact path="/receiver/:urlAddress" element={<Receiver />} />
        <Route exact path="/mobilewarning" element={<MobileWarningPage />} />
        <Route exact path="/browserwarning" element={<BrowserWarning />} />
        <Route exact path="/versionwarning" element={<VersionWarning />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
