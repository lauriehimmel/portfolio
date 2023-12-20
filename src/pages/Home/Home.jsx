// import { useState, useEffect, useRef } from "react";
import './Home.css'
import hamburger from "../../assets/hamburger-menu.png";
import AboutBody from "../../components/About/About-body";
import { useEffect, useRef, useState } from 'react';

export default function Navbar({ builtWith }) {
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
    <>
    <nav ref={heroRef} className="hero">
      <a href="/" className="logo">
        LAURIE <br /> HIMMEL
      </a>
      <div className="hover">
        <img
          src={hamburger}
          className="hamburger"
          
        />
      </div>
    </nav>
    <AboutBody className="testtt" builtWith={builtWith}/>
    </>
  );
}
