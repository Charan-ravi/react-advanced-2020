import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call use effect");
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  const increase = () => {
    return setValue(value + 1);
  };
  useEffect(() => {
    console.log("hello world");
  },[]);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={increase}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
