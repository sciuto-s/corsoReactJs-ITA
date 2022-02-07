import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  console.log("Render");

  function dimensionWindow() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    console.log("Sett addEventListener");
    window.addEventListener("resize", dimensionWindow);

    // return () => {
    //   console.log("Rimuovo addEventListener -- CLEAN UP ");
    //   window.removeEventListener("resize", dimensionWindow);
    // };
  }, []);
  return (
    <div
      className="container w-75 col-6 offset-3 bg-white shadow py-4"
      style={{ textAlign: "center" }}
    >
      <h1>
        {" "}
        {width} 𝗫 {height}{" "}
      </h1>
    </div>
  );
};

export default CleanUp;
