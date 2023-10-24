import React from "react";
import "./Project-tabs.css";

export default function FirstTab({builtWith}) {
  return (
    <>
      <div className="FirstTab">
        {/* <a href="https://winkfriends.netlify.app/" target="blank"> */}
        {/* <img className="project-logo" src="./assets/Wink-Logo.svg" /> */}
        {/* </a> */}
        <div>
          <p>
            Welcome to <strong>Wink</strong>, home of the cutest one-eyed
            animals you'll ever meet!
          </p>
          <br />
          <p>
            Wink is a full-stack MERN app that allows you to create and interact
            with digital pets.
          </p>
          <br />
          <p>
            Inspired by the 90s and my one-eyed dog Roux, it takes you back to a
            simpler time when phones had cords and apps were just what came
            before entrees.
          </p>
          <br />
          <div className="links">
            <a
              className="link-text"
              href="https://winkfriends.netlify.app/"
              target="blank"
            >
              Live site
            </a>{" "}
            |{" "}
            <a
              className="link-text"
              href="https://github.com/lauriehimmel/wink"
              target="blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="all-logos">
      <p className="built-with">BUILT WITH:</p>
      <img className="logos" src={builtWith.js} />
      <img className="logos" src={builtWith.react} />
      <img className="logos" src={builtWith.html} />
      <img className="logos" src={builtWith.css} />
      <img className="logos" src={builtWith.netlify} />
      </div>
      <div className="line"></div>
    </>
  );
}
