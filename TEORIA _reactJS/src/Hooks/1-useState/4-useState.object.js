import React, { useState } from "react";

const StateObject = () => {
  // const [name, setName] = useState("Dario");
  // const [age, setAge] = useState(24);
  // const [saluto, setSaluto] = useState("ciao");

  const [person, setPerson] = useState({
    name: "Dario",
    age: 24,
    saluto: "Ciao!",
  })

  const changeSaluto = () => {

    // setSaluto("Ciao ho fatto gli anni");
    // setAge(25);

    setPerson({
      ...person,
      age: 25,
      saluto: "Ciao ho fatto gli anni",
    })
  }
  
  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
      </div>
      <button className="button" onClick={changeSaluto}>
        Cambia lo stato
      </button>
    </div>
  )
}

export default StateObject
