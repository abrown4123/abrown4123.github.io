import React, { Component } from 'react';
import { connect } from 'react-redux';
import './master.css'

class ProjectDetail extends Component {

  // TODO: Make this a reusable dummy componet that returns identical JSX.
  render() {
    if (!this.props.project) {
      return (
        <div className='project-details'>
          <div className='project-preview'>
            <img className='project-img' src={this.props.firstProject.image} alt={this.props.firstProject.alt}/>
            <a>Live</a>
            <a>Code</a>
          </div>
          <div>
            <h1>{this.props.firstProject.title}</h1>
            <p>{this.props.firstProject.detail}</p>
          </div>
        </div>
      );
    }


    return (
      <div className='project-details'>
        <div className='project-preview'>
          <img className='project-img' src={this.props.project.image} alt={this.props.project.alt}/>
          <a>Live</a>
          <a>Code</a>
        </div>
        <div>
          <h1>{this.props.project.title}</h1>
          <p>{this.props.project.detail}</p>
        </div>
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
