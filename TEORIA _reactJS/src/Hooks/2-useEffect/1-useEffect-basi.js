import React, { useEffect } from "react";

// gestisce azioni side effects, cioe azioni che non avvengono dentro un component
//settare eventlistner

const useEffectBasi = () => {
  // import alternativo di hooks
  const [value, setValue] = React.useState(0);

  // console.log("useEffect non Chiamato");
  const funzione = () => {
    console.log("sono il secondo useEffect");
  };
  useEffect(() => {
    console.log("use aeffect attivo");
    // cambia il titolo del documento ogni volta che subisce un nuovo render
    //il nuovo render è dato dallo useState

    if (value < 1) {
      document.title = `Nessun messaggio`;
    } else if (value === 1) {
      document.title = `${value} nuovo messaggio`;
    } else {
      document.title = `${value} nuovi messaggi`;
    }
    return () => console.log("cleanUp function chiamata");
  }, [value]);
  const aumenta = () => {
    setValue((oldValue) => {
      return oldValue + 1;
    });
  };
  useEffect(funzione);
  return (
    <div className="item">
      <h4>
        Value: <span>{value}</span>
      </h4>
      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
