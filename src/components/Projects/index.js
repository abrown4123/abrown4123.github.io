import React, { Component } from 'react';
import ProjectDetail from '../ProjectDetail';
import ProjectList from '../ProjectList';

export default class Projects extends Component {
  render() {
    return (
      <div className='section'>
        <ProjectList />
        <ProjectDetail />
      </div>
    );
  }
}
