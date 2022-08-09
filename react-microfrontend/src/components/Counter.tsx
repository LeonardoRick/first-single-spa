import { useState } from 'react';

const Counter = () => {
  const [counter, updateCounter] = useState(0);

  const handleChange = (value: number) => {
    updateCounter((previous) => previous + value);
  };
  return (
    <>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(-1)}>Decrement</button>
      <button onClick={() => handleChange(1)}>Increment</button>
    </>
  );
};
export default Counter;
