import React, { Component } from 'react';
import ColorDisplay from '../components/color-components/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    changingColor: 'blue'
  };

  render() {
    const color = ['blue', 'yellow', 'purple', 'orange', 'green'];
    const { changingColor } = this.state;
    return (
      <>
        <ColorDisplay />
      </>

    );
  }
}
