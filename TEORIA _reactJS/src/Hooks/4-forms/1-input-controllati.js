import React, { useEffect, useState } from "react";

const ControlledInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [user, setUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (nome && email && phone) {
      console.log(`${(nome, email, phone)}`);
      setUser([
        ...user,
        {
          id: new Date(Date.now()).getTime().toString(),
          nome,
          email,
          phone,
        },
      ]);
      setNome("");
      setEmail("");
      setPhone("");
    } else alert("riempi il form");
  };

  const clickHandler = (e) => {
    const { value } = e.target;
    setPhone(value);
  };

  useEffect(() => {
    // console.log(new Date(Date.now()).getTime().toString());
    const { log } = console;
    log(user);
  }, [user]);

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
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-control col-9"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control col-9"
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
          value={phone}
          onChange={clickHandler}
          className="form-control col-9"
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
