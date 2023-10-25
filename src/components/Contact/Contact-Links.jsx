import github from "../../assets/github-mark.svg";
import linkedin from "../../assets/LI-logo.png";
import "./Contact-Components.css";


export default function ContactLinks() {
  return (
    <>
    <div className="contact-links-page">
      <div className="contact-links">
      <a href="https://www.linkedin.com/in/laurie-himmel/"> <img className="contact-logos" src={github} /></a>
        <a className="url" href="https://www.linkedin.com/in/laurie-himmel/">LinkedIn</a>
      </div>
      <div className="contact-links">
      <a href="https://github.com/lauriehimmel"> <img className="contact-logos" src={linkedin} /></a>
        <a className="url" href="https://github.com/lauriehimmel">Github</a>
      </div>
      </div>
    </>
  );
}
