import React, { Component } from 'react';
import { connect } from 'react-redux';
import './master.css';


class ProjectDetail extends Component {

  // TODO: Make this a reusable dummy componet that returns identical JSX.
  render() {
    if (!this.props.project) {
      const { firstProject } = this.props
      return (
        <div className='project-container'>
          <div className='project-preview'>
            <h1>{firstProject.title}</h1>
            <img className='project-img' src={firstProject.image} alt={firstProject.alt}/>
          </div>
          <div className='project-details'>
            <p className='project-description'>{firstProject.detail}</p>
            <p className='project-tech'> Technology Used: {firstProject.tech}</p>
            <div className='project-buttons'>
              <a className='live btn' href={firstProject.livelink}>Live</a>
              <a className='code btn' href={firstProject.codelink}>Code</a>
            </div>
          </div>
        </div>
      );
    }

    const { project } = this.props
    return (
      <div className='project-container'>
        <div className='project-preview'>
          <h1 className='project-title'>{project.title}</h1>
          <img className='project-img' src={project.image} alt={project.alt}/>
        </div>
        <div className='project-details'>
          <p className='project-description'>{project.detail}</p>
          <p className='project-tech'><span className='project-tech-used'>Technology Used:</span> {project.tech}</p>
          <div className='project-buttons'>
            <a className='live btn' href={project.livelink}>Live</a>
            <a className='code btn' href={project.codelink}>Code</a>
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
