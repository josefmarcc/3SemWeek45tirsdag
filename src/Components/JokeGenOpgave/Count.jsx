import React, { useEffect, useState } from "react";

export default function Count(props) {
  const { init, increment } = props;
  const [count, setCount] = useState(init);

  function decrementCount() {
    setCount((prevCount) => prevCount - increment);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + increment);
  }

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    setCount((count) => parseInt(storedCount));
  }, []);

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
