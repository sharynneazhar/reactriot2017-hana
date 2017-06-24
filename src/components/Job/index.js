import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './styles.css';

class Job extends Component {
  render() {
    return (
      <ListGroupItem className="job-container">
        <h4>{this.props.job.title}</h4>
        <p>{this.props.job.createdAt}</p>
        <p>{this.props.job.description}</p>
        <p>{this.props.job.compensation}</p>
      </ListGroupItem>
    );
  }
}

export default Job;
