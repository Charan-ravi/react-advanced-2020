import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const rapidIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  const slowIncrease=()=>{
    setTimeout(()=>{
      setValue(value+1);
    },2000);
  }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Up
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Down
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={slowIncrease}>
          slow Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={rapidIncrease}>
          Rapid Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
