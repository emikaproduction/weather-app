import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from './App.scss';

import Home from "./Home";
import Weather from "./Weather";

const BasicExample = () => (
  <Router>
    <div className="navbar">
      <ul>
        <li>
          <Link to="/weather/1">Los Angeles</Link>
        </li>
        <li>
          <Link to="/weather/2">San Diego</Link>
        </li>
        <li>
          <Link to="/weather/3">San Francisco</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/weather/:id" component={Weather} />
    </div>
  </Router>
);

export default BasicExample;
