import React from 'react';

function PopupSlider({ closePopup }) {
  return (
    <div className="popup-slider">
      <div className="popup-content">
        <span className="close-btn" onClick={closePopup}>&times;</span>
        <h3>My Skill Levels</h3>
        <div className="skill-level">
          <label>CSS3</label>
          <div className="progress-bar"><span style={{ width: '80%' }}>80%</span></div>
        </div>
        <div className="skill-level">
          <label>JavaScript</label>
          <div className="progress-bar"><span style={{ width: '80%' }}>80%</span></div>
        </div>
        <div className="skill-level">
          <label>Java</label>
          <div className="progress-bar"><span style={{ width: '90%' }}>90%</span></div>
        </div>
        <div className="skill-level">
          <label>C, dataStructures</label>
          <div className="progress-bar"><span style={{ width: '85%' }}>85%</span></div>
        </div>
      </div>
    </div>
  );
}

export default PopupSlider;
