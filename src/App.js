import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Test from "./pages/test/test";
import ContactPage from "./pages/Contact/Contact";

function App() {
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
    openAI: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/openai_ntsyko.svg",
    express: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698176672/expressjs_qkju8s.svg",
    python: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698184981/python_xvw2ix.svg",
    sql: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698185410/sql_hr4unp.png",
    restapi: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698185410/rest-api_rlmkoa.svg"
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About builtWith={builtWith}/>} />
        <Route path="/projects" element={<Projects builtWith={builtWith}/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
