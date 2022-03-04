import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const ErrorPage = ({ location }) => {
  console.log(location);
  const history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h1> 404: page not found</h1>
    </div>
  );
};

export default ErrorPage;
