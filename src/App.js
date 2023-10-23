import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Test from "./pages/test/test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/test" element={<Test />} />
        {/* <Route path="/tabs" element={<TestTabs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
