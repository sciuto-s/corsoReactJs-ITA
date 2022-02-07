import React, { useState } from "react";

// short circuit evaluetion
// -- espressione hce ritorna un valore in base allo stato di una funzione o costante che si vuole evalutre in base che questa espressione sia ture o false
const ShortRender = () => {
  const [parola, setparola] = useState(true);

  //ShortCircuitEvaluation con || operator
  const esempio = parola || "sono un esempio --- && Operator";
  //ShortCircuitEvaluation con && operator
  // const esempio2 = parola && "Ho un valore";

  return (
    <div>
      <h2>{esempio}</h2>
      {/* <h2>{esempio2}</h2> */}
      {parola && <h4>sono un componente</h4>}
    </div>
  );
};

export default ShortRender;
