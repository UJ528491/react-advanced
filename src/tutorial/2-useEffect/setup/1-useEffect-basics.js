import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("useEffect on");
    if (value >= 1) {
      document.title = `New Messages (${value})`;
    }
    // when list of dependency value changed render
  }, []);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;
