import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>short circuit</h2>
      <h1>{firstValue}</h1>
      <h1>{secondValue}</h1>
      {text || <h1>"text is false"</h1>}
      {text && <h1>"text is true"</h1>}
      <button
        className="btn"
        onClick={() => (text ? setText(false) : setText(true))}
      >
        {text ? "text to false" : "text to true"}
      </button>
    </>
  );
};

export default ShortCircuit;
