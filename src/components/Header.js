import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Frontend Developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "Responsive Design",
            "App Development",
            "Testing/Debugging",
            "Product and Maintenance",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#/" className="contact-me-btn">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
