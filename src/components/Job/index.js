import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ListGroupItem, Row, Col, Glyphicon } from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis'
import moment from 'moment'
import './styles.css';

class Job extends Component {
  _getJobProps = () => {
    return this.props.hit ? this.props.hit : this.props.job;
  }

  _getDetail = () => {
    const job = this._getJobProps();
    this.props.history.push({    // use push
       pathname: `/job/${job.id}`,
       query: { job }
     })
  }

  render() {
    const job = this._getJobProps();

    return (
      <ListGroupItem className="job-container" onClick={this._getDetail}>
        <Row className="job-row">
          <Col md={8} className="info">
            <div className="title">{job.title}</div>
            <Row>
              <Col md={6}>
                <div className="date">
                  <Glyphicon glyph="calendar" />
                  Posted {moment(job.createdAt).fromNow()}
                </div>
              </Col>
              <Col md={6}>
                <div className="location">
                  <Glyphicon glyph="map-marker" />
                  {job.location ? `Located in ${job.location.name}` : 'Contact job poster for location.'}
                </div>
              </Col>
            </Row>
            <LinesEllipsis
              className="desc"
              text={job.description}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
          </Col>
          <Col md={4} className="compensation">
            <div className="type">{job.type}</div>
            <div className="pay">${job.pay}</div>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default withRouter(Job);
