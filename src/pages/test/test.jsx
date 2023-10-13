import styled from 'styled-components';
import { useState, useEffect, useRef } from "react";

import './test.css';
import useRainbow from './useRainbow.hook';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const MagicRainbowButton = ({
  children,
  intervalDelay = 1300,
  ...delegated
}) => {
  const transitionDelay = intervalDelay * 1.25;

  const colors = useRainbow({ intervalDelay });

  const colorKeys = Object.keys(colors);

  const testRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!testRef.current) return;
      const { clientX, clientY } = ev;
      testRef.current.style.setProperty("--x", `${clientX}px`);
      testRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
    <button
    ref={testRef} 
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
      className="testbutton"
    >
      {children}
    </button>
    </>
  );
};


export default MagicRainbowButton;


