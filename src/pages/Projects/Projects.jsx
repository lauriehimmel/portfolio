import './Projects.css';

import Header from "../../components/Header/Header";
import ProjectsMap from '../../components/Projects/Projects-map';
import Navbar from '../../components/Navbar/Navbar';
import ProjectTabs from '../../components/Tabs/Project-tabs';


export default function Projects () {
  return (
    <>
    {/* <Header /> */}
    <Navbar />
    <div className="projects-main">
      {/* <ProjectsMap /> */}
      <ProjectTabs />
    </div>
    </>
  )
}