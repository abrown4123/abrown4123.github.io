import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProjectDetail extends Component {
  render() {
    if (!this.props.project) {
      return (
        <div>
          <h1>Select A Project</h1>
        </div>
      );
    }


    return (
      <div>
        <h1>{this.props.project.title}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.activeTab
  };
}

export default connect(mapStateToProps)(ProjectDetail);
