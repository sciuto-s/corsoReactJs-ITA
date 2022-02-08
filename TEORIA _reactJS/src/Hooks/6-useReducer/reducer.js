import { APRO_MODAL, CHIUDI_MODAL } from "./actions";

const reducer = (state, action) => {
  //prende in carico tutte le azione che necessitano di essere svolte per mutare lo state

  console.log(state, action);
  //   if (action.type === "PREMO_BOTTONE") {
  //     console.log("BOTTONE PREMUTO");
  //   }
  if (action.type === APRO_MODAL) {
    console.log(action);
    return {
      //prima la copia dell'oggetto e tutte le sue proprietà
      ...state,
      isModalOpen: true, //modifica lo state del modalOpen
      modalContent: action.payload,
    };
  }
  if (action.type === CHIUDI_MODAL) {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  // sempre return almeno lo state per non rompere le altre funzioni generate
  //   return state;

  //altrimenti si usa

  throw new Error(`Nessuna funzione corrisponde a ${action.type}`);
};

export default reducer;
