import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "hey there",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };
  return (
    <>
      <h3> {person.name}</h3>
      <h3> {person.age}</h3>
      <h3> {person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change Message
      </button>
    </>
  );
};

export default UseStateObject;
