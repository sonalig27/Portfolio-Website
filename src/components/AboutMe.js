import React from "react";
import myImg from "../assets/sonali_ganatra.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={myImg} alt="myself" />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <h2 className="aboutme-heading">About Me</h2>
          <p>
            Hello, I'm Sonali Ganatra. Enthusiastic Software Engineer with
            strong background in Machine Learning, Front-end Development, Web
            Development and Data Science. Skilled in C++, Python, JavaScript
            (ES6, AJAX, React), Scrum, Unix with certification courses focused
            in C++, Web development and Python Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
