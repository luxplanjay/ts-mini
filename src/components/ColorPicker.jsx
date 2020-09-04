import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const setActiveIdx = (index) => setActiveOptionIdx(index);

  const makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }

    return optionClasses.join(" ");
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
