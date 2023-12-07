import React from 'react';

function ExperienceSection() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title" data-aos="fade-down">My Experience</h2>
        <div className="serv-content">
          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-laptop-code"></i>
              <div className="text">Valuemomentum - Software Engineer (Data Tech Associate)</div>
              <p>
                Engaged in backend development tasks for client websites by crafting advanced XQuery functions on the MarkLogic NoSQL platform ensuring seamless integration with the Mendix front-end software.
              </p>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Malware Detection in Windows Machine - Publication</div>
              <p>
                This paper focuses on the detection of malware in Windows-based systems using advanced machine learning algorithms, including k-means, k-nearest neighbor, logistic regression, SVM, and naive Bayes. The objective was to predict and extract data related to various potential viruses impacting Windows systems. The methodology involved multiple testing rounds with nine different viruses, identifying the most effective algorithm in each round for predicting and isolating virus-related data. The research resulted in a comprehensive log table highlighting a sophisticated approach to malware detection in the Windows environment.
              </p>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-mobile-alt"></i>
              <div className="text">Intern at Netisoft Consultants</div>
              <p>
                I have successfully completed an internship with NetiSoft as a react developer. My primary goal is to develop a dashboard page for a photo gallery web application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
