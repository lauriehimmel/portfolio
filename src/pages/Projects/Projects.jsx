import './Projects.css';

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