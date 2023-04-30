import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

import Main from "../pages/mainpage/Index";
import Sender from "../pages/senderpage/Index";
import NotFound from "../pages/notfoundpage/Index";
import Receiver from "../pages/receiverpage/Index";
import IsLoading from "../pages/loadingpage/Index";
import { connectToSocket } from "../config/senderRTCconfig";
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

  const sendURL = async () => {
    const socketOfSender = await connectToSocket();
    socketOfSender.emit("URL", existedURL);
  };

  useEffect(() => {
    if (randomUrl !== "") {
      sendURL();
    }
  }, [randomUrl]);

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
        <Route exact path="/:randomUrl" element={<IsLoading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
