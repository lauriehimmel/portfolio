import "./Projects-two.css";
import Wink from "../../assets/Wink-Screenshot-2.png";
import { Link } from "react-router-dom";

export default function ProjectsTwo() {
  return (
    <div className="project-titles">
      <div>Projects</div>
      <a className="wink-project-title">WINK</a>
      <a href="/Kindr"className="kindr-project-title">KINDR</a>
      <div>Client Work</div>
      <a href="/client-portfolio-1" className="dev-design-title">DEV PORTFOLIO</a>
      <a href="/shine-with-sydney" className="sydney-site-title">SHINE WITH SYDNEY</a>
    </div>
  );
}
