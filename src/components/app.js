import React, { Component } from 'react';
import ProjectList from '../containers/projectList';
import ProjectDetail from '../containers/projectDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>This is my portfolio</h1>
        <ProjectList />
        <ProjectDetail />
      </div>
    );
  }
}
