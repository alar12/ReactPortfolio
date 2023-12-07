import React, { useState } from 'react';
import PopupSlider from './PopupSlider'; // Ensure this path is correct
import css3 from '../images/skill-icons/icons8-css3.svg';
import javascript from '../images/skill-icons/icons8-javascript.svg';
import reactnative from '../images/skill-icons/icons8-react-native.svg';
import html5 from '../images/skill-icons/icons8-html-5.svg';
import nodejs from '../images/skill-icons/icons8-nodejs.svg';
import vsc from '../images/skill-icons/icons8-visual-studio-code-2019.svg';

function SkillsSection() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="skills" id="skills">
      <div className="max-width" data-aos="fade-down">
        <h2 className="title" data-aos="fade-up">My Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p className="paragraph-2">These are the Skills I'm experienced in...</p>
            <a href="#popupSlider3" onClick={togglePopup}>Read More</a>
          </div>
          <div className="column right skill-box">
            <div className="icons">
              <img src={css3} alt="css" className="skill-icon" data-aos="flip-left" />
              <img src={javascript} alt="javascript" className="skill-icon" data-aos="flip-left" />
              <img src={reactnative} alt="react" className="skill-icon" data-aos="flip-left" />
            </div>
            <div className="icons">
              <img src={html5} alt="html5" className="skill-icon" data-aos="flip-left" />
              <img src={nodejs} alt="nodejs" className="skill-icon" data-aos="flip-left" />
              <img src={vsc} alt="vscode" className="skill-icon" data-aos="flip-left" />
            </div>
          </div>
        </div>
      </div>
      {showPopup && <PopupSlider closePopup={togglePopup} />}
    </section>
  );
}

export default SkillsSection;
