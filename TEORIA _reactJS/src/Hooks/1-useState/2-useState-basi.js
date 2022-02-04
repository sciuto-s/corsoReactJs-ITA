import React, { useState } from "react";
// 1 - Gli Hooks devono essere usasti con use davanti

// 2 - componenti devono avere la prima lettere Maiuscola
// se il component viene dichiarato con la minuscola non funzionano gli Hooks

// 4 - Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  // const { log } = console;
  // log(useState("Hello World!!"));

  // const value = useState()[0];
  // const handler = useState()[1];

  // console.log(value, handler);

  // 3 - Gli Hook devono essere invocati all'interno del corpo/funzione del componente
  const [titolo, setTitolo] = useState("Hello World!");

  const changeTitle = () => {
    if (titolo === "Hello World!") setTitolo("Ciao Mondo!");
    else setTitolo("Hello World!");
  };

  return (
    <>
      <h3> Basi useState</h3>
      <hr />
      <h1>{titolo}</h1>
      <button
        type="button"
        className="btn btn-info shadow my-3"
        onClick={changeTitle}
      >
        {" "}
        Change me!
      </button>
    </>
  );
};

export default UsoBase;
