import { useState, useEffect } from "react";

function ProjectsMap(props) {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project) => (
      <div className="indiv-project">
        <h1>{project.name}</h1>
        <div className="project-info">
          <div className="project-image">
            <img src={project.image} />
          </div>
          <a href={project.git} className="Github">
            <button>Github</button>
          </a>
          <a href={project.live} className="live-site">
            <button>live site</button>
          </a>
          <div className="about-project">{project.info}</div>
        </div>
      </div>
    ));
  };

  return projects ? (
    <div className="project-page">{loaded()}</div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default ProjectsMap;
