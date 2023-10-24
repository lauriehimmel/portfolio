import './Projects.css';

import Header from "../../components/Header/Header";
import ProjectsMap from '../../components/Projects/Projects-map';
import Navbar from '../../components/Navbar/Navbar';
import ProjectTabs from '../../components/Tabs/Project-tabs';
import ProjectCopy from '../../components/Projects/Project-copy';


export default function Projects () {
  const builtWith = {
    js: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/javascript_q2eei2.svg",
    react:
      "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/react_xjpwjx.svg",
    html: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/html5_twl23h.svg",
    css: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/css3_pmnmok.svg",
    nodejs: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/nodejs_ryhjri.svg",
    mongodb: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/mongodb_olvjyh.svg",
    heroku: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/heroku_etywh1.svg",
    netlify: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/netlify_rb2nzu.svg",
    openAI: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/openai_ntsyko.svg"
  }
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