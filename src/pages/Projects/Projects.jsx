import './Projects.css';

import ProjectsMap from '../../components/Projects/Projects-map';
import Navbar from '../../components/Navbar/Navbar';
import ProjectTabs from '../../components/Tabs/Project-tabs';
import ProjectCopy from '../../components/Projects/Project-copy';
import ProjectsTwo from '../../components/Projects2/Projects-two';


export default function Projects ({builtWith}) {
  return (
    <>
    <Navbar location={'projects'}/>
    <div className="projects-main">
      <ProjectCopy />
      <ProjectTabs builtWith={builtWith}/>
      {/* <ProjectsTwo /> */}
    </div>
    </>
  )
}