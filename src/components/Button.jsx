import React, { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Count {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
}
