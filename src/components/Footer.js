import React from "react";
import SocialMediaButtons from "react-social-media-buttons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>82 Brick kiln Rd., Chelmsford, MA-01824</p>
            </div>
            <div className="d-flex">
              <p>+1(978)259-5933</p>
            </div>
            <div className="d-flex">
              <p>ganatra.sonali@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href="#/">
                  Home
                </a>
                <br />
                <a className="footer-nav" href="#/">
                  About me
                </a>
                <br />
                <a className="footer-nav" href="#/">
                  Experience
                </a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav" href="#/">
                  Portfolio
                </a>
                <br />
                <a className="footer-nav" href="#/">
                  Contacts
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-items-center">
            <div className="d-flex justify-content-center">
              <SocialMediaButtons
                links={[
                  "https://www.linkedin.com/in/SonaliGanatra",
                  "https://github.com/s_ganatra27",
                ]}
                className="social-media"
                buttonStyle={{
                  margin: "0rem 0.5rem",
                  backgroundColor: "#ffccf9",
                  borderRadius: "30%",
                }}
                iconStyle={{ color: "#7d138b" }}
                openNewTab={true}
              />
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Sonali Ganatra | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
