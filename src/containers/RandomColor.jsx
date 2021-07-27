/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorDisplay from '../components/color-components/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    changingColor: '',
    interval: '',
  };


  updateColor() {
    const color = ['palevioletred', 'steelblue'];
    const randomNumber = Math.floor(Math.random() * color.length);
    const assignColor = color[randomNumber];
    this.setState({ changingColor: assignColor });
  }

  componentDidMount() {
    setInterval(() => {
      this.updateColor();
      console.log('testing');
    }, 1000);
  }

  componentDidUpdate(prevProp, prevState) {
    const img = 'public/IMG_3430.jpg';
    if (prevState.changingColor === this.state.changingColor) {
      this.setState({ changingColor: img });
    }

  }



  render() {
    const { changingColor } = this.state;
    return (
      <>
        <ColorDisplay background={changingColor} />
      </>
    );
  }
}
