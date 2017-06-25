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

  _getContact = () => {
    const job = this.props.location.query.job;
    let contact = 'Contact: ';

    if (job.contact && job.contact.email) {
      contact += job.contact.email;
    }

    if (job.contact && job.contact.email && job.contact.phone) {
      contact += ' or ';
    }

    if (job.contact && job.contact.phone) {
      contact += job.contact.phone;
    }

    return contact;
  }

  render() {
    const job = this.props.location.query.job;
    return (
      <div className="job-detail">
        <div className="job-info">
          <div className="title">{job.title}</div>
          <div>
            <div className="type">{job.type} Rate</div>
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
          <Col md={9}>
            <div className="location">
              <Glyphicon glyph="map-marker" />
              {this._getLocation()}
            </div>
          </Col>
        </Row>
        <div className="desc">{job.description}</div>
        <div className="contact">
          {this._getContact()}
        </div>
      </div>
    );
  }
}

export default withRouter(JobDetail);
