import React, { useState, useEffect } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = online => {
    console.log(online);
    console.log(online ? "online" : "offline");
  };
  const status = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>UseNetwork</h1>
      <h2>{status ? "Online" : "Offline"}</h2>
    </div>
  );
};

export default App;
