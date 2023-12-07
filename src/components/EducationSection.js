import React from 'react';

function EducationSection() {
  return (
    <section className="services" id="service">
      <div className="max-width">
        <h2 className="title" data-aos="fade-down">My Education</h2>
        <div className="serv-content">
          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-laptop-code"></i>
              <div className="text">Saint Louis University - Master's</div>
              <p>
                Currently, I'm enrolled in a CS course at SLU for my Master's.
              </p>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">K L University - Bachelor's</div>
              <p>
                Previously, I have a bachelor's degree in CSE (Computer Science and Engineering) with a specialization in CyberSecurity.
              </p>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-mobile-alt"></i>
              <div className="text">Intermediate and SSC</div>
              <p>
                Primary and Secondary Schooling - Sri Chaitanya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
