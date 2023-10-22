import React from "react";
import "../test-tabs.css";
import { useNavigate } from "react-router";

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <a href="https://winkfriends.netlify.app/" target="blank">
        <img className="wink-logo" src="./assets/Wink-Logo.svg" />
      </a>
      <p>
        Welcome to Wink, home of the cutest one-eyed animals you'll ever meet!
        Wink is a full-stack MERN app that allows you to create and interact
        with digital pets.
      </p>
    </div>
  );
};
export default FirstTab;

// "name": "Wink",
// "live": "https://winkfriends.netlify.app",
// "git": "https://github.com/lauriehimmel/wink",
// "image": "./assets/Wink-Logo.svg",
// "info": "Welcome to Wink, home of the cutest one-eyed animals you'll ever meet! Wink is a full-stack MERN app that allows you to create and interact with digital pets."
