import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import Logo from './Logo/Logo';

import Home from "./Home";
import Weather from "./Weather/Weather";

const BasicExample = () => (
  <Router>
    <div className="navbar">
      <Logo title="Weather APP"/>
      <ul>
        <li>
          <Link to="/weather/los_angeles">Los Angeles</Link>
        </li>
        <li>
          <Link to="/weather/san_diego">San Diego</Link>
        </li>
        <li>
          <Link to="/weather/san_francisco">San Francisco</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/weather/:id" component={Weather} />
    </div>
  </Router>
);

export default BasicExample;
