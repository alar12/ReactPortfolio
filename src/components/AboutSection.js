import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import img1 from '../images/P3021961.jpeg';
import img2 from '../images/klu.png';
import img3 from '../images/slu.jpg';
import img4 from '../images/vam.png';

function AboutSection() {
  const images = [img1, img2, img3, img4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    // Image slideshow effect
    const interval = setInterval(() => {
      setCurrentImgIndex(currentImgIndex => (currentImgIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Typed.js effect
    const typed = new Typed(".typing", {
      strings: ["Master's Student", "Software Engineer", "Gamer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      fadeOut: true,
    });

    return () => {
      clearInterval(interval); // Clear the image slideshow interval
      typed.destroy(); // Destroy Typed instance
    };
  }, []);

  const goToPrevious = () => {
    setCurrentImgIndex(currentImgIndex =>
      currentImgIndex === 0 ? images.length - 1 : currentImgIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImgIndex(currentImgIndex => (currentImgIndex + 1) % images.length);
  };

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="column left">
            <div className="slideshow-container">
              <img src={images[currentImgIndex]} alt="Slideshow" className="slide" /><br/>
              <button onClick={goToPrevious} className="prev">&#10094;prev</button>
              <button onClick={goToNext} className="next">next&#10095;</button>
            </div>
          </div>
          <div className="column right">
            <div className="text">
              I'm Lalith Adithya Reddy Avuthu and I'm a <span className="typing"></span>
            </div>
            <p className="paragraph">
              I am a motivated computer science graduate with experience in software development, database management, and machine learning. I am passionate about leveraging technology to solve complex problems.
            </p>
            <a href="https://drive.google.com/file/d/1Vr4B2RfpKKv9jjicD5cqdbg52NRsx_iE/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
