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
          <p>
            <strong>Technical Skills</strong>
            <br />
            <strong>Programming Languages:</strong> JavaScript, Python, JAVA,
            C++, TypeScript, SQL, XML.
            <br />
            <strong>Client-Side Development:</strong> React, HTML/HTML5,
            CSS/CSS3, jQuery, SCSS, JSON
            <br />
            <strong>Server-Side Development:</strong> MongoDB, Express, Node.js
            <br />
            <strong>Testing Runners:</strong> Jest, Enzyme, Postman
            <br />
            <strong>Version Control and Project Management:</strong> Git, Jira
            <br />
            <strong>Development Methodologies:</strong> Agile/Scrum, Waterfall
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
