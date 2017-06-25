import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import moment from 'moment'
import './styles.css';

class JobDetail extends Component {
  _getLocation = () => {
    const job = this.props.location.query.job;
    if (job.location && job.location.full) {
      return job.location.full;
    } else if (job.location && job.location.name) {
      return job.location.name;
    }

    return 'Contact job poster for location';
  }

  render() {
    const job = this.props.location.query.job;
    return (
      <div className="job-detail">
        <div className="job-info">
          <div className="title">{job.title}</div>
          <div>
            <div className="type">{job.type}</div>
            <div className="pay">${job.pay.toFixed(2)}</div>
          </div>
        </div>
        <hr />
        <Row>
          <Col md={3}>
            <div className="date">
              <Glyphicon glyph="calendar" />
              Posted {moment(job.createdAt).fromNow()}
            </div>
          </Col>
          <Col md={4}>
            <div className="location">
              <Glyphicon glyph="map-marker" />
              {this._getLocation()}
            </div>
          </Col>
        </Row>
        <div className="desc">{job.description}</div>
      </div>
    );
  }
}

export default withRouter(JobDetail);
