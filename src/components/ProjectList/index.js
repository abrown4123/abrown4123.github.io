import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tabSelect } from '../../actions/index';
import { bindActionCreators } from 'redux';
import './master.css'

class ProjectList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 'NachoCritique'
    }
  }

  clicked(project) {
    this.props.tabSelect(project);
    this.setState({active:project.title});
  }

  renderList() {
    return this.props.projects.map( project => {
      return (
        <li
          className={`project-tab ${this.state.active === project.title ? "active" : ''}`}
          key={project.title}
          onClick={() => this.clicked(project)}>
          {project.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className='project-list'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, { tabSelect })(ProjectList);
