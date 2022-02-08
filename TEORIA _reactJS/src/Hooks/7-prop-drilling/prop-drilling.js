import React, { useState } from "react";
import { data } from "../../data";

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    setPeople(people.filter((el) => el.id !== id));
  };

  return (
    <div>
      <h2>Passaggio di Proprietà a Cascata</h2>
      <Elenco people={people} removePeople={removePeople} />
    </div>
  );
};
const Elenco = ({ people, removePeople }) => {
  return (
    <div>
      {people.map((el, index) => {
        return <Persona key={el.id} {...el} removePeople={removePeople} />;
      })}
    </div>
  );
};
const Persona = ({ name, id, removePeople }) => {
  return (
    <article className="item shadow">
      <h5>{name}</h5>
      <button className="button delete-button" onClick={() => removePeople(id)}>
        X
      </button>
    </article>
  );
};

export default MainComponent;
