import React, { useReducer } from "react";
import Modal from "./Modal";
import reducer from "./reducer";
import { APRO_MODAL, CHIUDI_MODAL } from "./actions";

const initialState = {
  isModalOpen: false,
  modalContent: "Eccomi sono un modal",
};

const Index = () => {
  // il dispatch(funzione) indica le azioni che devono essere svolte per mutare lo state
  const [state, dispatch] = useReducer(reducer, initialState);

  // const click = () => {
  //   dispatch({ type: "PREMO_BOTTONE" });
  // };
  /* const [isModalOpen, setIsModalopen] = useState(false);
  const [modalContent, setModalContent] = useState("Eccomi sono un modal"); */
  // fornisce più struttura all'applicazione
  // useReducer()

  /* const openModal = () => {
    setIsModalopen(!isModalOpen);
  }; */

  //-- PER PASSARE IL REDUCER

  const apriModal = () => {
    dispatch({ type: APRO_MODAL, payload: "il nuovo modal" });
  };
  const chiudiModal = () => {
    dispatch({ type: CHIUDI_MODAL });
  };
  return (
    <>
      <div>
        <h3>Premi per aprire modal</h3>
        <button
          className="button"
          onClick={apriModal} /* onClick={openModal} */
        >
          Mostrami
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        chiudiModal={chiudiModal}
        /*  openModal={openModal} */
      />
    </>
  );
};

export default Index;
