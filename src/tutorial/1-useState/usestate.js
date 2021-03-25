import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <h1>hello {item}</h1>
      <h1>Start editing to see some magic happen!</h1>
      <button className="btn" onClick={incrementItem}>
        increment
      </button>
      <button className="btn" onClick={decrementItem}>
        decrement
      </button>
    </div>
  );
};

class AppUgly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0,
    };
  }
  incrementItem = () => {
    this.setState(state => {
      return { item: state.item + 1 };
    });
  };
  decrementItem = () => {
    this.setState(state => {
      return { item: state.item - 1 };
    });
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>hello {item}</h1>
        <h1>Start editing to see some magic happen!</h1>
        <button className="btn" onClick={this.incrementItem}>
          increment
        </button>
        <button className="btn" onClick={this.decrementItem}>
          decrement
        </button>
      </div>
    );
  }
}

export default App;
