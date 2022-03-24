import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [data, setData] = useState(1);
  const insFun = () => {
    setData(data + 1);
  };
  const decFun = () => {
    setData(data - 1);
  };

  return (
    <div id="main">
      <button id="increment" onClick={insFun}>
        increment
      </button>
      <div id="counter">
        {data % 3 === 0 && data % 15 !== 0 && (
          <div className="fizz">{data}</div>
        )}
        {data % 5 === 0 && data % 15 !== 0 && (
          <div className="buzz">{data}</div>
        )}
        {data % 15 === 0 && <div className="fizzbuzz">{data}</div>}
        {data % 15 !== 0 && data % 3 !== 0 && data % 5 !== 0 && (
          <div className="normal">{data}</div>
        )}
      </div>

      <button id="decrement" onClick={decFun}>
        decrement
      </button>
    </div>
  );
};

export default App;
