import React, { useEffect, useState } from "react";

const HideorShowComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="card shadow mt-5 p-5">
      <button
        className="button w-50 col-6 offset-3"
        onClick={() => setShow(!show)}
      >
        {show ? "nascondi" : "mostra"}
      </button>

      {
        //mostra Element solo se show è vero
        show && <Element />
      }
    </div>
  );
};

const Element = () => {
  const [contatore, setContatore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => oldValue + 1);
    }, 1000);
    //CLEAN UP FUNCTION sempre da dichiarare
    return () => clearTimeout(timer);
  }, [contatore]);
  return (
    <div>
      <h2>{contatore}</h2>
    </div>
  );
};

export default HideorShowComponent;
