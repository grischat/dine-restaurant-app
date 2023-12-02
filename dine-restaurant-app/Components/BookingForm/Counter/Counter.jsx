import "../Counter/Counter.scss";
import { useState } from "react";
const Counter = ({ onChange }) => {
  const [count, setCount] = useState(4);

  const handleCount = (newCount) => {
    newCount = Math.min(10, Math.max(1, newCount));
    if (newCount !== count) {
        setCount(newCount);
        onChange("people", newCount);
      }
  };
  return (
    <div className="counter__container">
      <button
        id={`${count === 0 ? "minus-disabled" : "minus"}`}
        onClick={() => handleCount(count - 1)}
      >
        -
      </button>
      <p id="people">{`${count} people`}</p>
      <button
        id={`${count === 10 ? "plus-disabled" : "plus"}`}
        onClick={() => handleCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
