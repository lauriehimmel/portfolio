import './Projects.css';
import Kindr from "../../components/Projects/Kindr";
import Mastermind from "../../components/Projects/Mastermind";
import Wink from "../../components/Projects/Wink";

import Header from "../../components/Header/Header";
import ProjectsMap from '../../components/Projects/Projects-map';


export default function Projects () {
  return (
    <>
    <Header />
    <div className="projects-main">
      <ProjectsMap />
    </div>
    </>
  )
}