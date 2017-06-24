import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Glyphicon } from 'react-bootstrap';
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
    console.log(this.props);
    return (
      <Row>
        <Col md={4}>
          <Link to='/create'><Glyphicon glyph="plus" /> New Post</Link>
          <SearchBox />
        </Col>
        <Col md={8}>
          {this.props.data.loading ? <p>Loading...</p> : this._renderPosts()}
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
