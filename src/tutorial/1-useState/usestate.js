import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLength = value => value.length < 10;
  const name = useInput("Mr.", maxLength);
  return (
    <div>
      <h1>hello</h1>
      <input type="text" placeholder="Name" {...name} />
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
