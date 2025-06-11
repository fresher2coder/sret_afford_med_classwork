import React, { useState } from "react";

function Counter(props) {
  console.log(props); //immutable object
  // props.incrementValue = 10; //not allowed, props are immutable
  const { initialValue, incrementValue } = props;
  const [count, setCount] = useState(initialValue); //mutable state
  const increment = () => {
    setCount((prevCount) => prevCount + incrementValue);
    console.log(count); //11
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - incrementValue);
    console.log(count); //11
  };
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;

// Mounted -> jsx rendered once
// Updated(state) -> jsx re-rendered on state change
// class- stateful, fn- stateless
// http -> stateless

// req1(log) -> user, pass       sessionStorage()-5
// res2 <- valid
// terminated

// req2(dash) -> sessionStorage.user
