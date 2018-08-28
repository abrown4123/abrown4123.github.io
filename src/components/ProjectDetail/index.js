import React, { Component } from 'react';
import { connect } from 'react-redux';
import './master.css'

class ProjectDetail extends Component {

  // TODO: Make this a reusable dummy componet that returns identical JSX.
  render() {
    if (!this.props.project) {
      return (
        <div className='project-container'>
          <div className='project-preview'>
            <h1>{this.props.firstProject.title}</h1>
            <img className='project-img' src={this.props.firstProject.image} alt={this.props.firstProject.alt}/>
          </div>
          <div className='project-details'>
            <p>{this.props.firstProject.detail}</p>
            <p className='project-tech'> Technology Used: {this.props.firstProject.tech}</p>
            <div className='project-buttons'>
              <a className='live btn' href={this.props.firstProject.livelink}>Live</a>
              <a className='code btn' href={this.props.firstProject.codelink}>Code</a>
            </div>
          </div>
        </div>
      );
    }


    return (
      <div className='project-container'>
        <div className='project-preview'>
          <h1 >{this.props.project.title}</h1>
          <img className='project-img' src={this.props.project.image} alt={this.props.project.alt}/>
        </div>
        <div className='project-details'>
          <p>{this.props.project.detail}</p>
          <p className='project-tech'> Technology Used: {this.props.project.tech}</p>
          <div className='project-buttons'>
            <a className='live btn'>Live</a>
            <a className='code btn'>Code</a>
          </div>
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
