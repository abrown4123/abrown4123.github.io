import React, { Component } from 'react';
import ProjectDetail from '../ProjectDetail';
import ProjectList from '../ProjectList';
import './master.css';

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
