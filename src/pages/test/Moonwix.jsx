import "./test.css";
import cake from "./cake.gif";
import logo from "./Moonwix.svg";
import smoke from "./cakesmoke.gif";
import disco from "./discoball.gif";
import bgsparkles from "./sparklesbg.gif"
import { useState } from "react";

export default function Moonwix() {
  const [isLit, setIsLit] = useState(true);
  function blowOut() {
    isLit ? setIsLit(false) : setIsLit(true);
  }

  const [isLit2, setIsLit2] = useState(true);
  function blowOutTwo() {
    isLit2 ? setIsLit2(false) : setIsLit2(true);
  }

  return (
    <div className="moonwix-bg">
      {/* <img className="moonwix-logo" src={logo} /> */}
      {/* {isLit ? (
        <img className="moonwix-cake" src={cake} onClick={blowOut} />
        ) : (
          <img className="moonwix-cake" src={smoke} onClick={blowOut} />
        )} */}
      {isLit2 ? (
        <>
        <div className="lightmode">
          <div className="logocake">
            <img className="moonwix-logo" src={logo} />
            <img
              className="moonwix-cake2"
              src={cake}
              onClick={blowOutTwo}
            />{" "}
          </div>
        </div>
        </>
      ) : (
        <div className="darkmode">
          <div className="discoballz">
            <img className="ballz" src={disco} />{" "}
            <img className="ballz" src={disco} />{" "}
            <img className="ballz" src={disco} />{" "}
            <img className="ballz" src={disco} />{" "}
            <img className="ballz" src={disco} />{" "}
          </div>
          <div className="logocake">
            <img className="moonwix-logo" src={logo} />
            <img
              className="moonwix-cake2"
              src={smoke}
              onClick={blowOutTwo}
            />{" "}
          <img className="bgsparkles" src={bgsparkles} />
          </div>
        </div>
      )}
    </div>
  );
}
