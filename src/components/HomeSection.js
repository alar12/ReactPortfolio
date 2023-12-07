import React, { useEffect } from 'react';
import Typed from 'typed.js';

function HomeSection() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Master's Student", "Software Engineer", "Gamer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1" data-aos="fade-up">Hello, my name is</div>
          <div className="text-2">Lalith Adithya Reddy Avuthu</div>
          <div className="text-3">I'm a <span className="typing"></span></div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
