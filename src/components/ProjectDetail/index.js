import React, { Component } from 'react';
import { connect } from 'react-redux';
import './master.css'

class ProjectDetail extends Component {

  render() {
    if (!this.props.project) {
      return (
        <div className='project-title'>
          <h1>{this.props.firstProject.title}</h1>
          <p>{this.props.firstProject.data}</p>
        </div>
      );
    }


    return (
      <div>
        <h1 >{this.props.project.title}</h1>
        <p>{this.props.project.data}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstProject: state.projects[0],
    project: state.activeTab
  };
}

export default connect(mapStateToProps)(ProjectDetail);
