import './Projects.css';

import Header from "../../components/Header/Header";
import ProjectsMap from '../../components/Projects/Projects-map';
import Navbar from '../../components/Navbar/Navbar';


export default function Projects () {
  return (
    <>
    {/* <Header /> */}
    <Navbar />
    <div className="projects-main">
      <ProjectsMap />
    </div>
    </>
  )
}