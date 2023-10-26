import "./About.css";
import AboutBody from "../../components/About/About-body";
import Navbar from "../../components/Navbar/Navbar";
import Laurie from "../../assets/Laurie.svg";

export default function About({builtWith}) {
  return (
    <div>
      <Navbar location={'about'}/>
      <div className="about-content">
        <AboutBody builtWith={builtWith} classname="about-body-paragraphs" />
        <img className="about-img" src={Laurie} />
      </div>
    </div>
  );
}
