import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {
  const [selectedColor, setSelectedColor] = [];
  const [colorInput, setColorInput] = useState({
    color: "",
    qty: 5,
  });

  /*  const color = new Values("hsl(240deg 100% 50% /1)");
  console.log(color.all(20));
  console.log(uuidv4()); */

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(colorInput);
    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;
    }
  };
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value,
    });
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="color"
            id="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
            className="input"
          ></input>
          <input
            type="number"
            name="qty"
            id="qty"
            value={colorInput.qty}
            max={100}
            min={2}
            step={5}
            onChange={handleChange}
            className="input"
          ></input>
        </div>
        <button className="btn btn-selector" type="submit">
          CREATE
        </button>
      </form>
    </>
  );
};

export default ColorGrading;
