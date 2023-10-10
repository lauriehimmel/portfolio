import './Projects.css';
import Kindr from "../../components/Projects/Kindr";
import Mastermind from "../../components/Projects/Mastermind";
import Wink from "../../components/Projects/Wink";

import Header from "../../components/Header/Header";


export default function Projects () {
  return (
    <>
    <Header />
    <div className="projects-main">
      <Kindr />
      <Wink />
      <Mastermind />
    </div>
    </>
  )
}