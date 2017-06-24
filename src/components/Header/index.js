import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { SearchBox } from 'react-instantsearch/dom';
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
        <Col xs={6} md={4}>
          <div className="search">
            <SearchBox />
          </div>
        </Col>
        <Col xs={3} md={6}>
          <div className="account">
            <Link to='/create' className="post-job-link"><Glyphicon glyph="plus" />Post a Job</Link>
            <a href="/"><Glyphicon glyph="bell" />Notifications</a>
            <a href="/"><Glyphicon glyph="envelope" />Inbox</a>
            <a href="/"><Glyphicon glyph="user" />Sharynne Azhar</a>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;
