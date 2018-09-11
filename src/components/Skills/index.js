import React, { Component } from 'react';
import './master.css';

export default class Skills extends Component {
  render() {
    return (
      <div className='skills-section'>
        <h1 className='title'>Skills</h1>
        <ul className='skills-list'>
          <li><span className='node icon'></span></li>
          <li><span className='react icon'></span></li>
          <li><span className='redux icon'></span></li>
          <li><span className='webpack icon'></span></li>
          <li><span className='es6 icon'></span></li>
        </ul>
      </div>
    );
  };
}
