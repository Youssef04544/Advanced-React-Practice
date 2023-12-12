import { useState } from "react";

const ErrorExample = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>useState error example</h2>
      <span>{counter}</span>
      <button onClick={() => setCounter((prevcounter) => prevcounter + 1)}>
        Increase
      </button>
      <button onClick={() => setCounter((prevcounter) => prevcounter - 1)}>
        Decrease
      </button>
    </>
  );
};

export default ErrorExample;
