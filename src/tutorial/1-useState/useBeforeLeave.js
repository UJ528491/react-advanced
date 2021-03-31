import React, { useState, useEffect } from "react";

const useBeforeLeave = onBefore => {
  useEffect(() => {
    const h1 = document.querySelector("h1");
    h1.addEventListener("mouseleave", handle);
    return () => h1.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = () => {
    onBefore();
  };
};

const App = () => {
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App;
