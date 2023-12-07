import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Test from "./pages/test/test";
import ContactPage from "./pages/Contact/Contact";
import ResumePage from "./pages/Resume/ResumePage";
import TestLaurieResume from "./components/Resume/TestResume";
import Moonwix from "./pages/test/Moonwix";
import KindrPage from "./pages/Projects/IndivProjects/Kindr";
import DevPortfolio from "./pages/Projects/IndivProjects/DevPortfolio";
import SydneyClient from "./components/Projects2/Sydney/Sydney-client";

function App() {
  const builtWith = {
    js: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337027/skills/JavaScript_opy0sy.svg",
    react:
      "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337043/skills/React_nrf7cp.svg",
    html: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337027/skills/HTML5_f1i1rn.svg",
    css: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337026/skills/CSS3_zrry1f.svg",
    nodejs: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337042/skills/Nodejs_uwdtak.svg",
    mongodb: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337087/skills/mongodb_iifnao.svg",
    heroku: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337026/skills/Heroku_oxp71y.svg",
    netlify: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337041/skills/Netlify_t4ywlg.svg",
    openAI: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337042/skills/openai-white-logomark_zugfhz.svg",
    express: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337026/skills/Express_iokjpp.svg",
    python: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337081/skills/python_tgul5o.svg",
    postgre: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337081/skills/postgre_eauwfl.png",
    restapi: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698185410/rest-api_rlmkoa.svg",
    postman: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698337417/skills/Postman-logo-2021_aksy4q.svg"
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About builtWith={builtWith}/>} />
        <Route path="/projects" element={<Projects builtWith={builtWith}/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/testresume" element={<TestLaurieResume />} />
        <Route path="/moonwix" element={<Moonwix />} />
        <Route path="/kindr" element={<KindrPage />} />
        <Route path="/client-portfolio-1" element={<DevPortfolio />} />
        <Route path="/shine-with-sydney" element={<SydneyClient />} />
      </Routes>
    </div>
  );
}

export default App;
