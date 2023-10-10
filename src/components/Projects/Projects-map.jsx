import { useState, useEffect } from "react";

// import "./Projects.css";
// import Header from "../../components/Header";


function ProjectsMap(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div className="indiv-project">
        <h1>{project.name}</h1>
        <div className="project-info">
          <div className="project-image">
          <img src={project.image} /></div>
          <a href={project.git} class="Github">
            <button>Github</button>
          </a>
          <a href={project.live} class="live-site">
            <button>live site</button>
          </a>
          <div className="about-project">{project.info}</div>
        </div>
      </div>
    ));
  };

  return projects ? (
    <div className="project-page">
      {loaded()}</div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default ProjectsMap;
