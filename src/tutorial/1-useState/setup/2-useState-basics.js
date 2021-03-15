import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("hello");
  console.log(text);
  console.log(setText);
  const handleClick = () => {
    if (text === "hello") {
      setText("changed hello");
    } else {
      setText("hello");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
