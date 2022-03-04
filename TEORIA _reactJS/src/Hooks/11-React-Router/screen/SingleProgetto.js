import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const SingleProgetto = (/* props => */ { history, location, match }) => {
  //   console.log(location);
  //   console.log(match.params.id);

  const { id } = useParams();
  const routerHistory = useHistory();

  const forcePageChange = () => {
    if (Number(id) === 1 || Number(id) === 2) {
      history.push("/progetto/3");
    } else {
      routerHistory.push("/progetto/1");
    }
  };
  return (
    <div>
      <h4>progetto numero: {id}</h4>
      <button className="btn btn-dark" onClick={forcePageChange}>
        Cambia progetto
      </button>
    </div>
  );
};

export default SingleProgetto;
