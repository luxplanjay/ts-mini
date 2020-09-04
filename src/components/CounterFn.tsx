import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ initialValue = 0, step = 1 }) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((value) => value + step);

  const decrement = () => setValue((value) => value - step);

  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>

      <div className="Counter__controls">
        <button type="button" onClick={increment}>
          Увеличить на {step}
        </button>
        <button type="button" onClick={decrement}>
          Уменьшить на {step}
        </button>
      </div>
    </div>
  );
};

export default Counter;
