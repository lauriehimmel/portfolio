import "./Projects-two.css";
import Wink from "../../assets/Wink-Screenshot-2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectsTwo() {
  const [clicked, setClicked] = useState(false);
  function onClick(e) {
    if (e.target.innerText = "WINK")
    clicked ? setClicked(false) : setClicked(true);
  }

  return (
    <div className="project-titles">
      <div>Projects</div>
      <div className="wink-project-title" onClick={onClick}>WINK</div>
      {clicked ? <div>clicked</div> : <></>}
      <div className="kindr-project-title">
        KINDR
      </div>
      {clicked ? <div>clicked</div> : <></>}
      <div>Client Work</div>
      <a href="/client-portfolio-1" className="dev-design-title">
        DEV PORTFOLIO
      </a>
      <a href="/shine-with-sydney" className="sydney-site-title">
        SHINE WITH SYDNEY
      </a>
    </div>
  );
}
