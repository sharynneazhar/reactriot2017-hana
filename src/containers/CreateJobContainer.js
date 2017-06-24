import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateJobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      compensation: ''
    }
  }

  _createJob = () => {
    const { title, description, compensation } = this.state;
    this.props.addJob({ title, description, compensation })
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          <input
            className='w-100 pa3 mv2'
            value={this.state.title}
            placeholder='Title'
            onChange={(e) => this.setState({title: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.description}
            placeholder='Description'
            onChange={(e) => this.setState({description: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.compensation}
            placeholder='Compensation'
            onChange={(e) => this.setState({compensation: e.target.value})}
          />
          {this.state.title && this.state.description && this.state.compensation &&
            <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this._createJob}>Create Job</button>
          }
        </div>
      </div>
    );
  }
}

const addMutation = gql`
  mutation addJob($title: String!, $description: String!, $compensation: String!) {
    createJob(title: $title, description: $description, compensation: $compensation) {
      id
      title
      description
      compensation
    }
  }
`

export default graphql(addMutation, {
  props: ({ ownProps, mutate }) => ({
    addJob: ({ title, description, compensation }) =>
      mutate({
        variables: { title, description, compensation },
      })
  })
})(withRouter(CreateJobContainer));
