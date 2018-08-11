import React, { Component } from 'react';
import './master.css';

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

//the code below shows a new subheading every second. Values located in the description array
// TODO: Add transition animation with css
  cycleSubheading() {
    const time = setInterval(() => {
      if (this.state.subheading_index > 0) {
        clearInterval(time);
      }
      this.setState({subheading_index: this.state.subheading_index+1});
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
