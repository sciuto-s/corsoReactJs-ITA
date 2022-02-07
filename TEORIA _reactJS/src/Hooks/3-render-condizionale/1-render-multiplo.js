import React, { useEffect, useState } from "react";
import axios from "axios";
const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () => {
    setIsError(false);
    //-PRIMA COSA DA FARE
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      console.log(res);
      //2
      setUser(res.data);

      //3
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{ width: "80px", height: "80px" }}
        className="rounded-circle my-4"
      ></img>
      <h2>{user.login}</h2>
    </article>
  );
};

const Loading = () => {
  return (
    <div className="card d-flex align-items-center p-5 shadow mt-5">
      <h2>Loading...</h2>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div className="card d-flex align-items-center p-5 bg-danger shadow mt-5">
      <h2>Error...</h2>
    </div>
  );
};

export default ConditionalCompining;
