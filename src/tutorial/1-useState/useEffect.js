import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(() => {
    sayHello();
  }, []);
  return (
    <div>
      <div>Hi</div>
      <button className="btn" onClick={() => setNumber(number + 1)}>
        {number}
      </button>
      <button className="btn" onClick={() => setAnumber(aNumber + 1)}>
        {aNumber}
      </button>
    </div>
  );
};

export default App;
