// PublisherComponent.jsx
import React, { useState } from 'react';
import eventBus from './eventBus';

const PublisherComponent = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    // Publish an event with some data
    console.log("object=>", message)
    eventBus.publish('newMessage', message);
    setMessage('');
  };

  return (
    <div>
      <h2>Pub Component</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a message"
      />
      <button onClick={handleClick}>Publish Message</button>
    </div>
  );
};

export default PublisherComponent;
