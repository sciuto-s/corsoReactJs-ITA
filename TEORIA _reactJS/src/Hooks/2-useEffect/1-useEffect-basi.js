import React, { useEffect } from "react";

// gestisce azioni side effects, cioe azioni che non avvengono dentro un component
//settare eventlistner

const useEffectBasi = () => {
  // import alternativo di hooks
  const [value, setValue] = React.useState(0);

  // console.log("useEffect non Chiamato");

  useEffect(() => {
    console.log("use aeffect attivo");

    // cambia il titolo del documento ogni volta che subisce un nuovo render
    document.title = `Nuovo messaggio: ${value}`;
  });
  const aumenta = () => {
    setValue((oldValue) => {
      return oldValue + 1;
    });
  };
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
