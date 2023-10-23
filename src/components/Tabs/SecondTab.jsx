import React from "react";
import "./Project-tabs.css";

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <a href="https://winkfriends.netlify.app/" target="blank">
        {/* <img className="project-logo" src="./assets/Kindr-Logo.svg" /> */}
      </a>
      <div>
        <p>Kindr is an app. It is very good. VERY good.</p>
        <br />
        <p>
          Kindr is a platform where you can create, share, and participate in
          meaningful acts of kindness. Whether you choose to complete deeds from
          fellow Kindr members or embark on the daily challenge, every day is an
          opportunity to make a positive impact.
        </p>
        <br />
        <p>
          Let's come together and make the world a brighter place, one act of
          kindness at a time!
        </p>
        <br />
        <p className="projects-link-hover">
          Created in collaboration with{" "}
          <a
            className="projects-link"
            href="https://louispino.netlify.app/"
            target="blank"
          >
            Louis Pino
          </a>
          .
        </p>
        <br />
        <div className="links">
          <a
            className="link-text"
            href="https://graceful-pixie-5234dd.netlify.app/"
            target="blank"
          >
            Live site
          </a>{" "}
          |{" "}
          <a
            className="link-text"
            href="https://github.com/LouisPino/Kindr"
            target="blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
export default SecondTab;
