import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem, Grid, Image } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Background from '../images/panorama.jpg'

class Header extends Component {




	render () {
		console.log('items', this.props.items);
		 return (
      <div className="jumbotron">
              <ul class="nav nav-pills">
      </ul>
      </div>
  //      <header className="header">
  //           <Row className="show-grid">
  //             <Col xs={12} md={8}>
  //             </Col>
  //             <Col xs={6} md={4}>
  //              <p>Привет Алиса</p>
  //             </Col>
  //           </Row>
  //         </header>
		);
	}
}

export default Header;