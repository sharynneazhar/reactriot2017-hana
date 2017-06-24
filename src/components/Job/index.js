import React, { Component } from 'react';
import './styles.css';

class Job extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.job.title}</h4>
        <p>{this.props.job.createdAt}</p>
        <p>{this.props.job.description}</p>
        <p>{this.props.job.compensation}</p>
      </div>
    );
  }
}

export default Job;
