import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Weather from "./Weather/Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Choose a city</h3>
      </div>
    );
  }
}
