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
          apiKey="cb6735eba862708a0c1b54369d9e659d"
          indexName="jobs"
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
