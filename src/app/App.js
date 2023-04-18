import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/mainpage/Index";
import Sender from "../pages/senderpage/Index";
import NotFound from "../pages/notfoundpage/Index";
import Receiver from "../pages/receiverpage/Index";

import "./styles.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sender" element={<Sender />} />
        <Route exact path="/receiver" element={<Receiver />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
