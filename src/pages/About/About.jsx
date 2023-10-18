import "./About.css";
import Header from "../../components/Header/Header";
import AboutBody from "../../components/About/About-body";
import Navbar from "../../components/Navbar/Navbar";
import Laurie from "../../assets/Laurie.svg";

export default function About() {
  return (
    <div>
      <Navbar />
      <Header />
      <p className="hi">Hi! I'm Laurie. </p>
      <div className="about-content">
        <AboutBody classname="about-body-paragraphs" />
        <img className="about-img" src={Laurie} />
      </div>
    </div>
  );
}
