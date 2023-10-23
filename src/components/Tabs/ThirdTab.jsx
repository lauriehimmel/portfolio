import React from "react";
import "./Project-tabs.css";

const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <a href="https://winkfriends.netlify.app/" target="blank">
        <img className="project-logo" src="./assets/Mastermind-Logo.svg" />
      </a>
      <div>
        <p>WORK IN PROGRESS:</p>
        <br />
        <p>
          {" "}
          Kindr is a platform where you can create, share, and participate in
          meaningful acts of kindness. Whether you choose to complete deeds from
          fellow Kindr members or embark on the daily challenge, every day is an
          opportunity to make a positive impact.!
        </p>
        <br />
        <p>Mastermind!</p>
      </div>
    </div>
  );
};
export default ThirdTab;
