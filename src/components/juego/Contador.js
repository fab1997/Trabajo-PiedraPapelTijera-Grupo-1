import React, { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1)
  //const reset = () => setCounter(0)

  return {
    counter,
    increase
    //reset 
  };
};

export default function Contador() {
  const counter = useCounter();

  return (
    <div>
      <div>{counter.counter}</div>
      <div>{counter.increase}</div>
    </div>
  )
}