import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <div>
          <img src='#' alt='A picture of Anthony Brown' />
          <div>
            <p className='about-me'></p>
            <ul className='social-links'>
              <li>Twitter</li>
              <li>Stack Overflow</li>
              <li>Git</li>
              <li>Linkedin</li>
              <li>Mail</li>
              <li>Resume</li>
            </ul>
          </div>
        </div>
    );
  };
}
