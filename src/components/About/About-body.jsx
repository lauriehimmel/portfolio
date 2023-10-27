import { useNavigate } from "react-router";
import AboutSkills from "./About-Skills";
import "./About-body.css";

export default function AboutBody({ builtWith }) {
  const navigate = useNavigate();

  return (
    <div className="about-component">
      <div className="about-body">
        <p className="hi">Hi! I'm Laurie. </p>
        <p className="aboutbody-text">
          I'm a software engineer with a collaborative spirit and an eye for
          design. <br />I bring expertise in project management,
          problem-solving, and a careful consideration of the user's needs
          having spent years in the eCommerce space doing just that. <br />
          My experience allows me to be a versatile developer, an efficient
          communicator, and a compassionate coworker.
        </p>
        <div onClick={() => navigate("/resume")} className="view-resume">
          <p className="hovertest">View my Resume!</p>
        </div>
      </div>
      <AboutSkills builtWith={builtWith} />
    </div>
  );
}
