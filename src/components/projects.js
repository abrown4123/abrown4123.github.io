import React, { Component } from 'react';
import ProjectDetail from './projects/projectDetail';
import ProjectList from './projects/projectList';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <ProjectList />
        <ProjectDetail />
      </div>
    );
  }
}
