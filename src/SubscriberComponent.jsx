// SubscriberComponent.jsx
import React, { useEffect, useState } from "react";
import eventBus from "./eventBus";

const SubscriberComponent = () => {
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    // Subscribe to the 'newMessage' event
    const listener = (message) => {
      setReceivedMessage(message);
    };

    eventBus.subscribe("newMessage", listener);

    // Cleanup on component unmount
    return () => {
      eventBus.unsubscribe("newMessage", listener);
    };
  }, []);

  return (
    <div>
      <h2>Sub Component</h2>
      {receivedMessage && <p>Received Message: {receivedMessage}</p>}
    </div>
  );
};

export default SubscriberComponent;
