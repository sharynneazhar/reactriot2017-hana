import React, { Component } from 'react';
import { ListGroupItem, Row, Col, Glyphicon } from 'react-bootstrap';
import moment from 'moment'
import './styles.css';

class Job extends Component {
  _getJobProps = () => {
    return this.props.hit ? this.props.hit : this.props.job;
  }

  render() {
    const job = this._getJobProps();

    return (
      <ListGroupItem className="job-container">
        <div className="title">{job.title}</div>
        <Row>
          <Col md={3}>
            <div className="date">
              <Glyphicon glyph="calendar" />
              Posted {moment(job.createdAt).fromNow()}
            </div>
          </Col>
          <Col md={9}>
            <div className="location">
              <Glyphicon glyph="map-marker" />
              {job.location ? `Located in ${job.location.name}` : 'Contact job poster for location.'}
            </div>
          </Col>
        </Row>
        <div className="desc">{job.description}</div>
        <div className="compensation">{job.compensation}</div>
      </ListGroupItem>
    );
  }
}

export default Job;
