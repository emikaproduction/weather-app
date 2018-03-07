import React from 'react';
import PropTypes from 'prop-types';
import './Weather.scss';

const API_URL = 'http://api.wunderground.com/api/635ddfb1dbd0e5a0/conditions/q';
const endpoints = {
  los_angeles: '/CA/Los_Angeles.json',
  san_diego: '/CA/San_Diego.json',
  san_francisco: '/CA/San_Francisco.json',
}

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);

    this.state = {
      places: [],
      names: []
    };
  }

  getWeather() {
    fetch(API_URL + endpoints[this.props.match.params.id])
    .then(response => response.json())
    .then(data => {
      this.setState({
        places: data.current_observation,
        names: data.current_observation.display_location
      })
    })
  }

  componentDidUpdate() {
    this.getWeather();
  }

  render() {
    let place = this.state.places;
    let name = this.state.names;

    return (
      <div className="text-center">
        <div className="weather-icon">
          <h2 className="city">{name.full}</h2>
          <img src={place.icon_url} />
          <p>{place.weather}</p>
        </div>
        <h2>{place.temp_c} °C</h2>
        <h2>{place.temp_f} °F</h2>
      </div>
    );
  }
}
