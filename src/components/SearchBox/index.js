import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { ClearAll } from 'react-instantsearch/dom';
import './styles.css';

class SearchBox extends Component {
  render() {
    return (
      <Well>
        <div className="search-section">
          <p className="title">What kind of job are you looking for?</p>
          <input className="input-box" />
        </div>
        <div className="search-section">
          <p className="title">In which city?</p>
          <input className="input-box" />
        </div>
        <ClearAll />
      </Well>
    );
  }
}

export default SearchBox;
