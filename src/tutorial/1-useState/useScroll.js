import React, { useState, useEffect, useRef } from "react";

const useScroll = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleTextColor);
    return () => window.removeEventListener("scroll", handleTextColor);
  }, []);
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const handleTextColor = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  console.log(state);
  return state;
};
const App = () => {
  const { x, y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 150 ? "Red" : "black" }}>
        useScroll
      </h1>
      <h2 style={{ position: "fixed", marginTop: "50px" }}>
        Your Yoffset is {Math.floor(y)}
      </h2>
      <h2 style={{ position: "fixed", marginTop: "100px" }}>
        {y > 150 ? "color was changed!" : ""}
      </h2>
    </div>
  );
};

export default App;
