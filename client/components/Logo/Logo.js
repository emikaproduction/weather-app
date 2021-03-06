import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Logo.scss';

export default class Logo extends React.Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      scale: 1.2,
      'max-glare': 1,
    })
  }

  render() {
    return(
      <div
        ref={node => (this.rootNode = node)}
        className="tilt-root">
        <div className="tilt-child">
          <div>
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </div>
    )
  }
}
