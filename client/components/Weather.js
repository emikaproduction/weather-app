import React from 'react';
import PropTypes from 'prop-types';

const API_URL = 'http://api.wunderground.com/api/635ddfb1dbd0e5a0/conditions/q';
const endpoints = {
  1: '/CA/Los_Angeles.json',
  2: '/CA/San_Diego.json',
  3: '/CA/San_Francisco.json',
}

export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      isLoading: false,
    };
  }
  
  componentDidMount() {
    fetch(API_URL + endpoints[this.props.match.params.id])
    .then(response => response.json())
    .then(data => {
      this.setState({
        places: data.current_observation,
      })
    })
  }
  componentWillReceiveProps() {
    fetch(API_URL + endpoints[this.props.match.params.id])
    .then(response => response.json())
    .then(data => {
      this.setState({
        places: data.current_observation,
      })
    })
  }
  render() {
    let place = this.state.places;

    return (
      <div className="text-center">
          <img src={place.icon_url} />
          <h2>{place.temp_c} °C</h2>
          <h2>{place.temp_f} °F</h2>
      </div>
    );
  }
}
