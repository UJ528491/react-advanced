import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h2>show/hide</h2>
      <button className="btn" onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && <Item />}
    </>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return window.removeEventListener("resize", checkSize);
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>window width size : {size}px</h2>
    </div>
  );
};

export default ShowHide;
