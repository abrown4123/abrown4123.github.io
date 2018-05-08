import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tabSelect } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProjectList extends Component {

  renderList() {
    return this.props.projects.map( project => {
      return (
        <li
          key={project.title}
          onClick = {() => this.props.tabSelect(project)}>
          {project.title}</li>
      );
    });
  }

  render() {
    return (
      <ul>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({tabSelect: tabSelect}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
