import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { connectToSocket } from "../../config/receiverRTCconfig";

export default function IsLoading() {
  const [URL, setURL] = useState("");
  const { randomUrl } = useParams();
  const navigate = useNavigate();
  console.log(randomUrl);

  const receivingURL = async () => {
    const socketOfReceiver = await connectToSocket();
    socketOfReceiver.on("URL", url => {
      setURL(url);
    });
  };

  useEffect(() => {
    receivingURL();
  }, []);

  useEffect(() => {
    if (randomUrl === URL) {
      navigate("/receiver");
    }
  }, [URL, randomUrl, navigate]);

  return <div>Is Loading...</div>;
}
