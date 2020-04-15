import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 15
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(
      () => (<Box />)
    );

    return (
      <div>
        <h2>Click on A Box!</h2>
        <div className="BoxContainer">{boxes}</div>
      </div>
    );
  }
}

export default BoxContainer;
