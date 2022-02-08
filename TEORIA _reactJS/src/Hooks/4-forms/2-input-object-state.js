import React, { useEffect, useState } from "react";

const ControlledInput = () => {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    phone: "",
  });
  const [users, setUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.nome && user.email && user.phone) {
      // console.log(`${(nome, email, phone)}`);
      setUsers([
        ...users,
        {
          id: new Date(Date.now()).getTime().toString(),
          //prendo tutti i valori di user
          ...user,
        },
      ]);
      setUser({
        nome: "",
        email: "",
        phone: "",
      });
    } else alert("riempi il form");
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    console.log(e.target);
    //ES6 PER AGGIUNGERE ALL'ARRAY
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    const { log } = console;
    log(users);
  }, [users]);

  return (
    //posso inserire la funzione su tutto il form o solo sul bottone
    <form className="bg-white rounded shadow p-4" onSubmit={submitHandler}>
      <div className="form-group d-flex align-items-center justify-content-around container">
        {" "}
        <label htmlFor="nome" className="text-left font-weight-bold col-3">
          Nome:
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          //PASSARE VALUE COME STATE
          value={user.nome}
          className="form-control col-9"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-around container">
        {" "}
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={user.email}
          className="form-control col-9"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-around container">
        {" "}
        <label htmlFor="phone" className="text-left font-weight-bold col-3">
          Phone:
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={user.phone}
          className="form-control col-9"
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-info " onSubmit={submitHandler}>
        {" "}
        Save
      </button>
    </form>
  );
};

export default ControlledInput;
