import React, { Component } from 'react';

const description = ["Web Developer", "Nesquik Connoiseur", "Other Witty Thing"]

export default class Hero extends Component {

//Eventually the code below is going to animate between the description array values

  // renderDescription() {
  //   return setTimeout(() => {
  //       let i = 0;
  //       i++;
  //       return descriptions[i];
  //     }, 1000);
  // }

  render() {
    return (
      <div className="hero">
        <h1>Anthony Brown</h1>
        <h2>{this.renderDescription()}</h2>
      </div>
    );
  }
}
