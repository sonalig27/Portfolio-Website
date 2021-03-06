import { Fragment } from "react";
import CardGame from "../assets/portfolio/card-game.png";
import TodoList from "../assets/portfolio/to-do-list-apps.png";
import QuoteGenerator from "../assets/portfolio/Quote-Generator.png";
import FoodOrder from "../assets/portfolio/food-order.jpg";
import PigGame from "../assets/portfolio/pig_game.jpg";
import shapeEditor from "../assets/portfolio/shape_editor.png";
import covidTracker from "../assets/portfolio/COVID-Tracker.jpg";
import mobileAppSecurity from "../assets/portfolio/mobile-app-security.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupboxCardGame = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={CardGame}
          alt="Cards Memory Game Project"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          href="#/"
          onClick={() =>
            window.open(
              "https://github.com/sonalig27/React/tree/main/flip-card-game"
            )
          }
        >
          Project Link
        </a>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCardGame = {
    titleBar: {
      enable: true,
      text: "Memory Card Game",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxQuotes = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={QuoteGenerator}
          alt="Quote Generator Project"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          href="#/"
          onClick={() =>
            window.open(
              "https://github.com/sonalig27/React/tree/main/quotes-app"
            )
          }
        >
          Project Link
        </a>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigQuotes = {
    titleBar: {
      enable: true,
      text: "Quote Generator Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxToDoList = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={TodoList}
          alt="To-Do List Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          href="#/"
          onClick={() =>
            window.open(
              "https://github.com/sonalig27/React/tree/main/todo-list-app"
            )
          }
        >
          Project Link
        </a>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigToDoList = {
    titleBar: {
      enable: true,
      text: "To-DO List Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxFoodOrder = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={FoodOrder}
          alt="Food Ordering Project"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          href="#/"
          onClick={() =>
            window.open(
              "https://github.com/sonalig27/React/tree/main/food-order-app"
            )
          }
        >
          Project Link
        </a>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFoodOrder = {
    titleBar: {
      enable: true,
      text: "Food Ordering Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxPigGame = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={PigGame}
          alt="Pig Dice Game Project"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          href="#/"
          onClick={() =>
            window.open("https://github.com/sonalig27/Pig_game_JS")
          }
        >
          Project Link
        </a>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPigGame = {
    titleBar: {
      enable: true,
      text: "Pig Dice Game",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxShapeEditor = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={shapeEditor}
          alt="2D shape Editor Project"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          href="#/"
          onClick={() =>
            window.open("https://github.com/sonalig27/2D_Shape_Editor_Tool")
          }
        >
          Project Link
        </a>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigShapeEditor = {
    titleBar: {
      enable: true,
      text: "2D Shape Editor",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxCovidTracker = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={covidTracker}
          alt="Covid Tracker Project"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          href="#/"
          onClick={() =>
            window.open(
              "https://github.com/sonalig27/COVID19_Interactive_Data_Visualization"
            )
          }
        >
          Project Link
        </a>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCovidTracker = {
    titleBar: {
      enable: true,
      text: "COVID Tracker",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxMobileAppSecurity = () => {
    const content = (
      <Fragment>
        <img
          className="portfolio-image-popupbox"
          src={mobileAppSecurity}
          alt="Mobile App Security Project"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
      </Fragment>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMobileAppSecurity = {
    titleBar: {
      enable: true,
      text: "Mobile App Security",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h2 className="text-center py-5 portfolio-heading">Portfolio</h2>
        <div className="image-box-wrapper row justify-content-center">
          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxCardGame}
          >
            <img
              className="portfolio-image"
              src={CardGame}
              alt="card flip game project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxToDoList}
          >
            <img
              className="portfolio-image"
              src={TodoList}
              alt="Todo list project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxQuotes}
          >
            <img
              className="portfolio-image"
              src={QuoteGenerator}
              alt="Quote Generator project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxFoodOrder}
          >
            <img
              className="portfolio-image"
              src={FoodOrder}
              alt="Food Ordering project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxPigGame}
          >
            <img
              className="portfolio-image"
              src={PigGame}
              alt="Pig Dice Game project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxShapeEditor}
          >
            <img
              className="portfolio-image"
              src={shapeEditor}
              alt="2D SHape Editor project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxCovidTracker}
          >
            <img
              className="portfolio-image"
              src={covidTracker}
              alt="Covid tracker project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box col col-auto col-lg-3"
            onClick={openPopupboxMobileAppSecurity}
          >
            <img
              className="portfolio-image"
              src={mobileAppSecurity}
              alt="Mobile App security project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigCardGame} />
      <PopupboxContainer {...popupboxConfigToDoList} />
      <PopupboxContainer {...popupboxConfigFoodOrder} />
      <PopupboxContainer {...popupboxConfigQuotes} />
      <PopupboxContainer {...popupboxConfigPigGame} />
      <PopupboxContainer {...popupboxConfigShapeEditor} />
      <PopupboxContainer {...popupboxConfigCovidTracker} />
      <PopupboxContainer {...popupboxConfigMobileAppSecurity} />
    </div>
  );
};

export default Portfolio;
