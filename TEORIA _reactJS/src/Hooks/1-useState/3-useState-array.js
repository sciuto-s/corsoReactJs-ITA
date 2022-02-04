import React, { useState } from "react";
import { data } from "../../../data";

const ArrayState = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    // const newData = people.filter((item) => item.id !== id);
    setPeople((oldPeople) => {
      console.log(oldPeople);
      return oldPeople.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      {/* <h3> UseState with Array Components</h3> */}

      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item shadow">
            <h5>{name}</h5>
            <button
              type="button"
              className="button delete-button"
              onClick={() => deletePerson(id)}
            >
              𝗫
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
