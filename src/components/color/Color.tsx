import { useEffect, useState } from "react";
import "./color.css";

const Color = () => {
  // const [randomColor, setRandomColor] = useState<string>();
  const [typeOfColor, setTypeOfColor] = useState<string>("hex");
  const [color, setColor] = useState<string | undefined>(undefined);

  //For Random Color
  // const genRandomColor = (): string => {
  //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
  // };

  // const handleRandomColor = () => {
  //   const newColor = genRandomColor();
  //   setRandomColor(newColor);
  //   document.body.style.backgroundColor = newColor;
  // };

  //For Hex Color

  function randomColorUtil(length: number) {
    return Math.floor(Math.random() * length);
  }

  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtil(hex.length)];
    }
    setColor(hexColor);
    document.body.style.backgroundColor = hexColor;
  };

  //For RGB color

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);

    setColor(`rgb(${r},${g}, ${b})`);
    document.body.style.backgroundColor = `rgb(${r},${g}, ${b})`;
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <>
      <div className="btns">
        <button
          className="color-btn"
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          style={{
            backgroundColor: color,
            color: color === "#FFFFFF" ? "black" : "white",
          }}
        >
          Generate on Demand color
        </button>

        <button
          className="color-btn"
          onClick={() => {
            setTypeOfColor("rgb");
          }}
          style={{
            backgroundColor: color,
            color: color === "white" ? "black" : "white",
          }}
        >
          Create rgb color
        </button>

        <button
          className="color-btn"
          onClick={() => {
            setTypeOfColor("hex");
          }}
          style={{
            backgroundColor: color,
            color: color === "white" ? "black" : "white",
          }}
        >
          Create hex color
        </button>
      </div>
      <div className="color-content">
        {color && (
          <>
            <span className="color-para">{color}</span>
            <span className="color-para">{`${
              typeOfColor === "rgb" ? "" : "hex"
            }`}</span>
          </>
        )}
      </div>
    </>
  );
};

export default Color;
