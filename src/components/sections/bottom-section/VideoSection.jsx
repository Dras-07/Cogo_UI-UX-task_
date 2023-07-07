import React from 'react';
import './VideoSection.css'
const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&w=1920&q=75" alt="Video" />
      </div>
      <div className="video-description">
       <div className="video-text">
        <h1 className="video-title">Grow Faster with Cogoport</h1>
        <h3 className="video-subtitle">Know more about Cogoport’s Global Trade PlatformTM</h3>
        </div>
        <div className="video-button">
        <button className="know-more-button">Know More ▶</button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
