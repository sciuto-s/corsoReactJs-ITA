import React, { useState, useContext } from "react";
import { data } from "../../data";

const AppContext = React.createContext();
// restituirà un Provider o un Consumer
const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));
  return (
    //contenitore con cui impacchettare i componenti,
    //tutti i componenti che hanno accesso a questo conntext avranno tutte le prop o funzioni dichiarate in quel context

    // alla proprietà value posso passare quello che voglio, tendenzialmente un oggetto
    <AppContext.Provider value={{ people, removePeople }}>
      <div>
        <h3> Use Context Component </h3>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  const info = useContext(AppContext);
  console.log(info);
  return (
    <div>
      {info.people.map((el, index) => {
        return <Persona key={index} {...el} />;
      })}
    </div>
  );
};

const Persona = ({ id, name }) => {
  const { removePeople } = useContext(AppContext);
  return (
    <div className="item shadow">
      <h5> {name} </h5>
      <button className="button delete-button" onClick={() => removePeople(id)}>
        x
      </button>
    </div>
  );
};

export default MainComponent;
