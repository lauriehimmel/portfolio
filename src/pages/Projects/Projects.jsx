import './Projects.css';
import Kindr from "../../components/Projects/Kindr";
import Mastermind from "../../components/Projects/Mastermind";
import Wink from "../../components/Projects/Wink";

export default function Projects () {
  return (
    <div className="projects-main">
      <Kindr />
      <Wink />
      <Mastermind />
    </div>
  )
}