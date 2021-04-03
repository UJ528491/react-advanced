import React, { useState, useEffect } from "react";
import defaultAxios from "axios";
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  if (!opts.url) {
    return;
  }

  return { ...state, refetch };
};

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://api.themoviedb.org/3/movie/popular?api_key=cb1f8ea461c0d46c85be52b0d9f766b4&language=en-US&page=1",
  });
  return (
    <div>
      <h1>useAxios</h1>
      <h2>{data && data.status}</h2>
      <h3>{loading ? "Loading now.." : "Loading complete!"}</h3>
      <button className="btn" onClick={refetch}>
        Refetch
      </button>
    </div>
  );
};

export default App;
