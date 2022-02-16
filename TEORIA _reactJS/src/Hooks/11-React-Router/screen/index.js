import React from "react";
import About from "./About";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Progetti from "./Progetti";
import SingleProgetto from "./SingleProgetto";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const index = () => {
  //Router è il componente che Wrappa
  return (
    <Router>
      <ul className="nav ">
        {/*  <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/progetti" className="nav-link">
            Progetti
          </a>
        </li> */}

        {/* Per renderla una Single page e non farla ricaricare ogni volta che cliccko su link inserisco Link/to */}

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/progetti" className="nav-link">
            Progetti
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/progetti" component={Progetti} />
        <Route path="/progetto/:id" component={SingleProgetto} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default index;
