import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

import Main from "../pages/mainpage/Index";
import Sender from "../pages/senderpage/Index";
import NotFound from "../pages/notfoundpage/Index";
import Receiver from "../pages/receiverpage/Index";

import "./styles.css";

function App() {
  const [randomUrl, setRandomUrl] = useState("");
  const existedURL = sessionStorage.getItem("url");
  const generateURL = () => {
    const url = uuid4();
    sessionStorage.setItem("url", url);
    setRandomUrl(url);
  };

  const handleGenerateURL = () => {
    if (existedURL) {
      setRandomUrl(existedURL);
    } else {
      generateURL();
    }
  };
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/sender"
          element={
            <Sender
              randomUrl={randomUrl}
              handleGenerateURL={handleGenerateURL}
            />
          }
        />
        <Route exact path="/:randomUrl" element={<Receiver />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
