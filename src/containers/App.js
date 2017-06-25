import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import Header from '../components/Header';
import 'tachyons';
import '../index.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <InstantSearch
          appId="9VES2W8BMD"
          apiKey="712376043f4586446d61ca7fe28b7aef"
          indexName="Jobs"
        >
          <Header />
          <div className="container">
            {this.props.children}
          </div>
        </InstantSearch>
      </div>
    );
  }
}
