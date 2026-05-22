import React from 'react';
import './CarbonTrackLogo.css';

const CarbonTrackLogo = ({ className = "", style = {} }) => {
  return (
    <div className={`carbontrack-logo ${className}`} style={style}>
      <span className="carbontrack-text">CarbonTrack</span>
    </div>
  );
};

export default CarbonTrackLogo;
