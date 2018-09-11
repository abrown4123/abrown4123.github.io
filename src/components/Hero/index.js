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
    }, 1250);
  };

  render() {
    const description =  ["Problem Solver", "Application Builder", "Web Developer"]

    return (
      <div className='hero hero-parallax'>
        <div className='hero-overlay'>
            <h1 className='hero-title'>Anthony Brown</h1>
            <hr className='hero-divider' />
            <h2 className='hero-subheading'>{description[this.state.subheading_index].toUpperCase()}</h2>
        </div>
      </div>
    );
  }
}

export default Hero;
