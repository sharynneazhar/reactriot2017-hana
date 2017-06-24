import React, { Component } from 'react';
import Header from '../components/Header';
import 'tachyons';
import '../index.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
