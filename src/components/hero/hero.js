import React, { Component } from 'react';

class Hero extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subheading_index: 0
    };
  }

  componentDidMount() {
    this.cycleSubheading();
  }

//Eventually the code below is going to animate between the description array values

  cycleSubheading() {
    const self = this;
    const time = setInterval(function () {
      if (self.state.subheading_index > 0) {
        clearInterval(time);
      }
      self.setState({subheading_index: self.state.subheading_index+1});
    }, 1000);
  };

  render() {
    const description =  ["Web Developer", "Nesquik Connoiseur", "Other Witty Thing"]

    return (
      <div className="hero">
        <h1>Anthony Brown</h1>
        <h2>{description[this.state.subheading_index]}</h2>
      </div>
    );
  }
}

export default Hero;
