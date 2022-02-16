import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const SingleProgetto = (/* props => */ { history, location, match }) => {
  //   console.log(location);
  //   console.log(match.params.id);

  const { id } = useParams();

  return (
    <div>
      <h4>progetto numero: {id}</h4>
    </div>
  );
};

export default SingleProgetto;
