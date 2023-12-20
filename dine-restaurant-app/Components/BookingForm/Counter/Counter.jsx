import "../Counter/Counter.scss";
import { useState } from "react";
const Counter = ({ value, onChange }) => {
  const [count, setCount] = useState(4);

  const handleCount = (newCount) => {
    newCount = Math.min(10, Math.max(1, newCount));
    if (newCount !== count) {
      setCount(newCount);
      onChange(newCount);
    }
  };
  return (
    <div className="counter__container">
      <p
        id={`${count === 1 ? "minus-disabled" : "minus"}`}
        onClick={() => handleCount(count - 1)}
      >
        -
      </p>
      <p id="people">{`${value} people`}</p>
      <p
        id={`${count === 10 ? "plus-disabled" : "plus"}`}
        onClick={() => handleCount(count + 1)}
      >
        +
      </p>
    </div>
  );
};

export default Counter;
