import React, { useState } from "react";

// short circuit evaluetion
// -- espressione hce ritorna un valore in base allo stato di una funzione o costante che si vuole evalutre in base che questa espressione sia ture o false
const ShortRender = () => {
  const [parola, setparola] = useState("valore");
  const [toggle, setToggle] = useState(false);

  //ShortCircuitEvaluation con || operator
  const esempio = parola || "sono un esempio --- && Operator";

  //ShortCircuitEvaluation con && operator
  // const esempio2 = parola && "Ho un valore";

  //-- OPERATORE TERNARIO
  // const esempio3 = parola === "valore" ? "true" : "false";
  const esempio3 = !parola ? "vero" : "falso";

  return (
    <div>
      {/* <h2>{esempio}</h2> */}
      {/* <h2>{esempio2}</h2> */}
      {/* {parola && <h4>sono un componente</h4>}
       */}
      <h2>{parola || "Sono un esempio se non è inserito un valore"}</h2>
      {toggle ? (
        <h2 className="text-success">Vero</h2>
      ) : (
        <h5 className="text-danger">Falso</h5>
      )}
      {/* {esempio3} */}
      <button className="button p-5" onClick={() => setToggle(!toggle)}>
        {" "}
        Change Toggle
      </button>
    </div>
  );
};

export default ShortRender;
