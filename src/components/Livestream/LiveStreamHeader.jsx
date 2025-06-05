import React from 'react';
import './LiveStreamHeader.css';

const LiveStreamHeader = () => {
  return (
    <section
      className="live-stream"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/livestream-header.jpg)` }}
    >
      <div className="live-stream__overlay"></div>

      <div className="live-stream__content">
        <h1>Live-Stream Production</h1>
        <div className="live-stream__underline"></div>
      </div>
    </section>
  );
};

export default LiveStreamHeader;
