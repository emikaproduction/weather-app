import React from 'react';
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
      loading: true
    };
  }

  getWeather(props) {
    this.state = {
      loading: true
    };
    fetch(API_URL + endpoints[props.match.params.id])
    .then(response => response.json())
    .then(data => {
      this.setState({
        places: data.current_observation,
        loading: false
      })
    });
  }

  componentDidMount() {
    this.getWeather(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getWeather(nextProps);
  }

  render() {
    let place = this.state.places;

    if (this.state.loading) {
      return (
        <div className="text-center">
          <div className="weather-box">
            <h2 className="loading">Loading ...</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div className="text-center">
          <div className="weather-box">
            <h2 className="city">{place.display_location.full}</h2>
            <div className="weather-info">
              <div className="place-icon">
                <img src={place.icon_url} />
              </div>
              <div className="place-info">
                <p>{place.weather}</p>
                <h2>{place.temp_c} °C</h2>
                <h2>{place.temp_f} °F</h2>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
