import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "uj",
    age: 32,
    message: "i want to keep going",
  });
  const [message, setMessage] = useState(person.message);
  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage("hello world");
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
