import './Projects.css';

import ProjectsMap from '../../components/Projects/Projects-map';
import Navbar from '../../components/Navbar/Navbar';
import ProjectTabs from '../../components/Tabs/Project-tabs';
import ProjectCopy from '../../components/Projects/Project-copy';


export default function Projects ({builtWith}) {
  return (
    <>
    <Navbar />
    <div className="projects-main">
      <ProjectCopy />
      <ProjectTabs builtWith={builtWith}/>
    </div>
    </>
  )
}