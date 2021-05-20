import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Fragment } from "react";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <Fragment>
      <Particles
        className="particles-canvas"
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: [
                "#d81ec8",
                "#EC6711",
                "#F2F542",
                "#42B9F5",
                "#3aF030",
                "#741AEB",
              ],
            },
            links: {
              color: {
                value: ["#d81ec8"],
              },
              distance: 150,
              opacity: 0.5,
              enable: true,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "star",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </Fragment>
  );
}

export default App;
