import React from "react";
import "../test-tabs.css";

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <a href="https://winkfriends.netlify.app/" target="blank">
        <img className="wink-logo" src="./assets/Wink-Logo.svg" />
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
      </div>
    </div>
  );
};
export default SecondTab;
