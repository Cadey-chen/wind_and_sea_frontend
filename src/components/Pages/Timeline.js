import React from 'react';
import '../../App.css';
import './Timeline.css';
import blue_butterfly_transparent from '../../images/Blue_Butterfly_Transparent.png';

function Timeline() {
  return (
    <>
    <div className="timeline-container">
      <h1>Timeline</h1>
    </div>
    <div className="timeline-cards-container">
      <div className="bbt">
        <img src={blue_butterfly_transparent} alt="A blue butterfly"/>
      </div>
    </div>
    </>
  )
}

export default Timeline;