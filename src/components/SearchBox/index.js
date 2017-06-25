import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { SearchBox as Search, CurrentRefinements, ClearAll } from 'react-instantsearch/dom';
import './styles.css';

class SearchBox extends Component {
  render() {
    return (
      <Well>
        <CurrentRefinements />
        <div className="search-section">
          <p className="title">What kind of job are you looking for?</p>
          <Search
            searchAsYouType={false}
            translations={{
              placeholder: '',
            }}
          />
        </div>
        <div className="search-section">
          <p className="title">In which city?</p>
          <Search
            searchAsYouType={false}
            translations={{
              placeholder: '',
            }}
          />
        </div>
        <ClearAll clearsQuery />
      </Well>
    );
  }
}

export default SearchBox;
