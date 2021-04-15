import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email, id: new Date().getTime().toString() };
      console.log(person);
      setPeople(people => {
        return [...people, person];
      });
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">name : </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {people.map((person, index) => {
        const { firstName, email, id } = person;
        return (
          <div key={id} className="item">
            <h3>{firstName}</h3>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
