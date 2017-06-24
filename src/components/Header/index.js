import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { InstantSearch, SearchBox } from 'react-instantsearch/dom';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <Row className="header">
        <Col xs={3} md={2}>
          <div className="logo">
            <a href='/'><h2>Hana</h2></a>
          </div>
        </Col>
        <Col xs={6} md={7}>
          <div className="search">
            <InstantSearch
              appId="9VES2W8BMD"
              apiKey="cb6735eba862708a0c1b54369d9e659d"
              indexName="jobs"
            >
              <SearchBox />
            </InstantSearch>
          </div>
        </Col>
        <Col xs={3} md={3}>
          <div className="account">
            <a href="/"><Glyphicon glyph="bell" /></a>
            <a href="/"><Glyphicon glyph="envelope" /></a>
            <a href="/">Sharynne Azhar</a>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;
