import React, { useState } from "react";

function IDK() {
  const [number, setNumber] = useState(0);

  const plusOneBtn = () => {
    setNumber(number + 1);
  };

  const resetBtn = () => {
    setNumber(0);
  };

  const minusOneBtn = () => {
    setNumber(number - 1);
  };
  return (
    <div className="container-one">
      <p>{number}</p>
      <div>
        <button onClick={plusOneBtn}>+1</button>
        <button onClick={resetBtn}>reset</button>
        <button onClick={minusOneBtn}>-1</button>
      </div>
    </div>
  );
}

export default IDK;
