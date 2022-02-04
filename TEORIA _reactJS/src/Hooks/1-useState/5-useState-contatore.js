import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const resetContatore = () => {
    setContatore(0);
  };
  const diminuisciContatore = () => {
    setContatore(contatore - 1);
  };

  const aumentaContatore = () => {
    /*  setContatore((oldValue) => {
      console.log(oldValue);
      // if(oldValue +1 === 5) Per gestire le situazioni limite
      // return oldValue

      return oldValue + 1;
    });
  ; */
    setTimeout(() => {
      setContatore((oldValue) => {
        //-- FUNCIONAL RETURN --
        // si basa sul parametro corrente al momento del click
        // fa si che se clicco tante volte il valore si aggiorna dopo 2 sec
        return oldValue + 1;
      });
    }, 2000);
  };

  return (
    <div className="bg-white shadow py-5 w-75 col-6 offset-3">
      <h3>{contatore}</h3>
      <div className="d-flex justify-content-between">
        <button
          className="button my-2"
          /*  onClick={() => setContatore(contatore - 1)} */
          onClick={diminuisciContatore}
        >
          Diminuisci
        </button>
        <button className="button my-2" onClick={aumentaContatore}>
          Aumenta
        </button>
      </div>
      <button className="button reset-button my-2" onClick={resetContatore}>
        Reset
      </button>
    </div>
  );
};

export default CounterComponent;
