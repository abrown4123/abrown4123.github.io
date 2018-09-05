import React, { Component } from 'react';
import './master.css';

export default class About extends Component {
  render() {
    return (
        <div className='about'>
          <div className='about-map'>
            <iframe width="450" height="350" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Austin%2C%20TX&key=AIzaSyCT5elF7cPOpiuS8-hmm5AfMXytsCd6wag" allowFullScreen></iframe>
          </div>
          <div className='about-info'>
            <img className='about-headshot' src='../../../images/me.png' />
            <div className="about-links">
              <a href="https://www.linkedin.com/in/abrown4123/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
              <a href="https://github.com/abrown4123" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
              <a href="mailto:abrown4123@gmail.com" target="_blank"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
              <a href="https://stackoverflow.com/users/story/7509227" target="_blank"><i className="fa fa-stack-overflow fa-2x" aria-hidden="true"></i></a>
              <a href="https://twitter.com/TonyTheTinker"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
              <a href="images/Anthony%20Brown%20Resume%202018.pdf" target="_blank"><i className="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
    );
  };
}
