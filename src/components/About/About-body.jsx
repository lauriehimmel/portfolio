import { useNavigate } from "react-router";
import AboutSkills from "./About-Skills";
import "./About-body.css";
import React from "react";


export default function AboutBody({ builtWith }) {
  const navigate = useNavigate();

  return (
    <div className="about-component">
      <div className="about-body">
        <p className="hi">Hi! I'm Laurie. </p>
        <p className="aboutbody-text">
          I'm a software engineer with a collaborative spirit and a designer's eye. <br />With extensive eCommerce experience, I excel at communicating with users, empathizing with their needs, and solving their problems.<br />
          As a versatile dev I communicate with clarity and compassion. Curiosity and creativity drive me; I look for innovative solutions and am always on the hunt for increased efficiency.
          <br /><br />
          <strong>Let's work together!</strong>
          </p>
        <div onClick={() => navigate("/resume")} className="view-resume">
          <p className="hovertest">View my Resume</p>
        </div>
      </div>
      <AboutSkills builtWith={builtWith} />
    </div>
  );
}
