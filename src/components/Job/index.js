import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './styles.css';

class Job extends Component {
  _getJobProps = () => {
    return this.props.hit ? this.props.hit : this.props.job;
  }

  render() {
    const job = this._getJobProps();

    return (
      <ListGroupItem className="job-container">
        <h4>{job.title}</h4>
        <p>{job.createdAt}</p>
        <p>{job.description}</p>
        <p>{job.compensation}</p>
      </ListGroupItem>
    );
  }
}

export default Job;
