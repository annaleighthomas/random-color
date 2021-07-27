import React, { Component } from 'react';
import ColorDisplay from '../components/color-components/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    changingColor: 'blue',
    interval: ''
  };

  updateColor() {
    const color = ['blue', 'yellow', 'purple', 'orange', 'green'];
    const randomNumber = Math.floor(Math.random() * color.length);
    const assignColor = color[randomNumber];
    this.setState({ changingColor: assignColor });
  }

  componentDidMount() {
    setInterval(() => this.updateColor(), 1000);
  }


  render() {
    const { changingColor } = this.state;
    return (
      <>
        <ColorDisplay backgroundColor={changingColor} />
      </>
    );
  }
}
