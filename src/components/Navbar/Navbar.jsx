import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import hamburger from "../../assets/hamburger-menu.png";

export default function Navbar({ location }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <nav ref={heroRef} className="hero">
      <a href="/" className="logo">
        LAURIE <br /> HIMMEL
      </a>
      <div className="hover">
        <img
          src={hamburger}
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        {location === "projects" && (
          <ul className="nav-items">
            <li>
              <a className="location" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="notlocation" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="notlocation" href="/about">
                About
              </a>
            </li>
          </ul>
        )}
        {location === "contact" && (
          <ul className="nav-items">
            <li>
              <a className="notlocation" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="location" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="notlocation" href="/about">
                About
              </a>
            </li>
          </ul>
        )}
        {location === "about" && (
          <ul className="nav-items">
            <li className="notLocation-li">
              <a className="notlocation" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="notlocation" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="location" href="/about">
                About
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
