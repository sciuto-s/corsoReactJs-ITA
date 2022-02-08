import React, { useEffect, useRef, useState } from "react";

const RefExample = () => {
  const [posizione, setPosizione] = useState(0);
  //si usa per tenere traccia del valore
  const inputRef = useRef(null);
  console.log(useRef);

  const titolo = useRef(null);

  const handleSubmit = (e) => {
    //previene reload della pagina ogni volta che viene premuto un button
    e.preventDefault();
    // console.log(inputRef.current);
  };
  useEffect(() => {
    setPosizione(titolo.current.getBoundingClientRect());
  }, [titolo]);

  return (
    <div>
      <h2 ref={titolo} className="ml-5 mt-5">
        Titolo Titolo
      </h2>
      <h4
        style={{
          position: "absolute",
          left: posizione.left,
          top: `${posizione.top + 400}px`,
        }}
      >
        Posizione
      </h4>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}></input>
        <button className="button" type="submit">
          Invia
        </button>
      </form>
    </div>
  );
};

export default RefExample;
