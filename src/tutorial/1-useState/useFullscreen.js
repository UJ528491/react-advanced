import React, { useState, useEffect, useRef } from "react";

const useFullscreen = () => {
  const [state, setState] = useState("exit");
  const element = useRef();
  const turnFull = () => {
    setState("full");
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    setState("exit");
    document.exitFullscreen();
  };
  return { element, turnFull, exitFull, state };
};
const App = () => {
  const { element, turnFull, exitFull, state } = useFullscreen();
  return (
    <div>
      <h1>useFullscreen</h1>
      <div ref={element}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JziBIpRiacj7Dd9R0_liEQHaHc%26pid%3DApi&f=1"
          alt="poster"
        />
        {state === "exit" ? (
          <button className="btn" onClick={turnFull}>
            fullscreen
          </button>
        ) : (
          ""
        )}
        {state === "full" ? (
          <button className="btn" onClick={exitFull}>
            exit
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
