import { useEffect, useRef } from "react";
import "./test.css";

export default function Test() {
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
      <div ref={heroRef} className="herotest">
        <p className="titletest">Gradients!</p>
      </div>
    </>
  );
}
