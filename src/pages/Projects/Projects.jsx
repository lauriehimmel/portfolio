import './Projects.css';

import Header from "../../components/Header/Header";
import ProjectsMap from '../../components/Projects/Projects-map';
import Navbar from '../../components/Navbar/Navbar';
import ProjectTabs from '../../components/Tabs/Project-tabs';
import ProjectCopy from '../../components/Projects/Project-copy';


export default function Projects () {
  return (
    <>
    <Navbar />
    <div className="projects-main">
      <ProjectCopy />
      <ProjectTabs />
    </div>
    </>
  )
}