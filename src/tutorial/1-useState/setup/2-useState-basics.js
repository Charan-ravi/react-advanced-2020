import React, { useState } from "react";
//useState - function

//general use of hooks 
//component name must be in uppercase
//must be in function/component body
//cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('hey'));
  // const val = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(val,handler);
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
