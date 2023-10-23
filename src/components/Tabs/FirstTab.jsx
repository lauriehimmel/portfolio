import React from "react";
import "./Project-tabs.css";

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <a href="https://winkfriends.netlify.app/" target="blank">
        <img className="project-logo" src="./assets/Wink-Logo.svg" />
      </a>
      <div>
        <p>
          Welcome to Wink, home of the cutest one-eyed animals you'll ever meet!
        </p>
        <br />
        <p>
          Wink is a full-stack MERN app that allows you to create and interact
          with digital pets.
        </p>
        <br />
        <p>
          Inspired by the 90s and my one-eyed dog Roux, it takes you back to a
          simpler time when phones had cords and apps were just what came before
          entrees.
        </p>
        <br />
       <div className="links"><a className="link-text" href="https://winkfriends.netlify.app/">Live site</a> | <a className="link-text" href="https://github.com/lauriehimmel/wink">Github</a></div>
      </div>
    </div>
  );
};
export default FirstTab;

// "name": "Wink",
// "live": "https://winkfriends.netlify.app",
// "git": "https://github.com/lauriehimmel/wink",
// "image": "./assets/Wink-Logo.svg",
// "info": "Welcome to Wink, home of the cutest one-eyed animals you'll ever meet! Wink is a full-stack MERN app that allows you to create and interact with digital pets."
