import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SearchBox from '../components/SearchBox';
import Job from '../components/Job';

class JobListContainer extends Component {
  _renderPosts = () => {
    if (this.props.data.allJobs.length === 0) {
      return (
        <p>No jobs available at this time.</p>
      );
    }

    return (
      this.props.data.allJobs.map((job) =>
        <Job key={job.id} job={job} refresh={() => this.props.data.refetch()} />
      )
    );
  }

  render() {
    return (
      <Row>
        <Col md={4}>
          <SearchBox />
        </Col>
        <Col md={8}>
          <ListGroup>
            {this.props.data.loading ? <p>Loading...</p> : this._renderPosts()}
          </ListGroup>
        </Col>
      </Row>
    );
  }

}

const JobQuery = gql`query job {
  allJobs(orderBy: updatedAt_DESC) {
    id
    createdAt
    updatedAt
    compensation
    description
    title
  }
}`

export default graphql(JobQuery)(JobListContainer);
