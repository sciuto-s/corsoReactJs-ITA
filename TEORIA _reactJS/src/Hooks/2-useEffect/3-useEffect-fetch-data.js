import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    const res = await axios.get(url);
    console.log(res);
    setUsers(res.data);
  };
  //non puo essere asyncrona perchè viene eseguita ogni volta che viene eseguito un render
  useEffect(() => {
    getData();
    // con l'array lo useEffect viene chiamato solo dopo il primo render
  }, []);
  return (
    <div>
      <h1>Fetch Component</h1>
      <ul className="users">
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id} className="shadow">
              <img src={img} alt={login}></img>

              <div>
                <h5>{login}</h5>
                <p>
                  Profile: <a href={html_url}>{html_url}</a>{" "}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchComponent;
