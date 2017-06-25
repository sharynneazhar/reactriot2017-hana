import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { ControlLabel } from 'react-bootstrap';
import gql from 'graphql-tag';
import places from 'places.js';

class CreateJobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      description: '',
      cityName: '',
      location: {
        country: '',
        lat: '',
        lng: '',
        name: '',
        full: ''
      },
      contact: {
        phone: '',
        email: ''
      },
      pay: 0.00
    }
  }

  componentDidMount() {
    const _this = this;
    const options = {
      container: '#address-input',
    };

    let placesAutocomplete = places(options);
    placesAutocomplete.on('change', function resultSelected(e) {
      _this.setState({
        cityName: e.suggestion.value,
        location: {
          country: e.suggestion.country,
          lat: e.suggestion.latlng.lat,
          lng: e.suggestion.latlng.lng,
          name: e.suggestion.name,
          full: e.suggestion.value
        }
      });
    });
  }

  _createJob = () => {
    const {
      title,
      type,
      description,
      location,
      contact,
      pay
    } = this.state;

    this.props.createJob({
      title,
      type,
      description,
      location,
      contact,
      pay
    }).then(() => this.props.history.push('/'));
  }

  _handleChange = (e) => {
    let st = {};
    st[e.target.name] = e.target.name === 'pay' ? parseFloat(e.target.value) : e.target.value;
    this.setState(st);
  }

  render() {
    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          <ControlLabel>Title</ControlLabel>
          <input
            className='w-100 pa3 mv2'
            name='title'
            value={this.state.title}
            onChange={this._handleChange}
          />

          <ControlLabel>Type</ControlLabel>
          <div className="mb3">
            <input
              type='radio'
              name='type'
              value={'hourly'}
              onChange={this._handleChange}
            /> Hourly
          </div>
          <div className="mb3">
            <input
              type='radio'
              name='type'
              value={'fixed'}
              onChange={this._handleChange}
            /> Fixed
          </div>

          <ControlLabel>Descripton</ControlLabel>
          <textarea
            className='w-100 pa3 mv2'
            name='description'
            rows={10}
            value={this.state.description}
            onChange={this._handleChange}
          />

          <ControlLabel>Location</ControlLabel>
          <input
            id='address-input'
            className='w-100 pa3 mv2'
            type='search'
            name='cityName'
            value={this.state.cityName}
            onChange={this._handleChange}
          />

          <ControlLabel>Pay</ControlLabel>
          <input
            className='w-100 pa3 mv2'
            type='number'
            step='0.01'
            name='pay'
            value={this.state.pay}
            onChange={this._handleChange}
          />

          <ControlLabel>Email</ControlLabel>
          <input
            className='w-100 pa3 mv2'
            type='search'
            value={this.state.contact.email}
            onChange={(e) => this.setState({ contact: { email: e.target.value }})}
          />

          <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this._createJob}>Create Job</button>
        </div>
      </div>
    );
  }
}

const addMutation = gql`
  mutation createJob(
    $title: String!,
    $type: String!,
    $description: String!,
    $location: Json,
    $contact: Json
    $pay: Float!
  ) {
    createJob(
      title: $title,
      type: $type,
      description: $description,
      location: $location,
      contact: $contact,
      pay: $pay
    ) {
      id
      title
      type
      description
      location
      contact
      pay
    }
  }
`

export default graphql(addMutation, {
  props: ({ ownProps, mutate }) => ({
    createJob: ({
      title,
      type,
      description,
      location,
      contact,
      pay
    }) =>
      mutate({
        variables: {
          title,
          type,
          description,
          location,
          contact,
          pay
        },
      })
  })
})(withRouter(CreateJobContainer));
