import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import places from 'places.js';

class CreateJobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      cityName: '',
      location: {
        country: '',
        lat: '',
        lng: '',
        name: ''
      },
      compensation: ''
    }
  }

  _createJob = () => {
    const { title, description, location, compensation } = this.state;
    this.props.createJob({ title, description, location, compensation })
      .then(() => this.props.history.push('/'));
  }

  componentDidMount() {
    const _this = this;
    const options = {
      container: '#address-input',
    };

    let placesAutocomplete = places(options);
    placesAutocomplete.on('change', function resultSelected(e) {
      _this.setState({
        location: {
          country: e.suggestion.country,
          lat: e.suggestion.latlng.lat,
          lng: e.suggestion.latlng.lng,
          name: e.suggestion.name
        }
      });
    });
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
            id='address-input'
            className='w-100 pa3 mv2'
            type='search'
            value={this.state.cityName}
            placeholder='City'
            onChange={(e) => this.setState({cityName: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.compensation}
            placeholder='Compensation'
            onChange={(e) => this.setState({compensation: e.target.value})}
          />
          {this.state.title && this.state.description && this.state.compensation && this.state.location &&
            <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this._createJob}>Create Job</button>
          }
        </div>
      </div>
    );
  }
}

const addMutation = gql`
  mutation createJob($title: String!, $description: String!, $location: Json, $compensation: String!) {
    createJob(title: $title, description: $description, location: $location, compensation: $compensation) {
      id
      title
      description
      location
      compensation
    }
  }
`

export default graphql(addMutation, {
  props: ({ ownProps, mutate }) => ({
    createJob: ({ title, description, location, compensation }) =>
      mutate({
        variables: { title, description, location, compensation },
      })
  })
})(withRouter(CreateJobContainer));
