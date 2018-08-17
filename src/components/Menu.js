import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem, Grid, Image } from 'react-bootstrap';
import Header from './Header';
import Green from '../images/green-salad.jpg'
import Salad from '../images/salad.jpg'
import Shrimp from '../images/shrimp.jpg'
import Cake from '../images/cake.jpg'
import Strawberry from '../images/strawberry.jpg'
import IceCream from '../images/icecream.jpg'
import Limonad from '../images/limonad.jpg'
import Coctaile from '../images/coctaile.jpg'
import Mohito from '../images/mohito.jpg'



class Menu extends Component {
	render () {
	  return (
	       <div className="container">
	       	<Header />
	         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
	            <Row className="clearfix">
	              <Col sm={2}>
	                  <Nav bsStyle="pills" stacked>
	                      <NavItem eventKey="first">Салаты</NavItem>
	                      <NavItem eventKey="second">Десерт</NavItem>
	                      <NavItem eventKey="third">Напитки</NavItem>
	                  </Nav>
	              </Col>
	              <Col sm={10}>
	                <Tab.Content animation>
	                  <Tab.Pane eventKey="first">
	                  <Grid>
	                      <Row>
	                        <Col  md={3}>
	                          <Image src={Salad} style={{width: 150}}  />
	                        </Col>
	                        <Col  md={4}>
	                          <Image src={Green} style={{width: 150}} />
	                        </Col>
	                        <Col  md={4}>
	                          <Image src={Shrimp} style={{width: 150}} />
	                        </Col>
	                      </Row>
	                    </Grid>
	                  </Tab.Pane>
	                  <Tab.Pane eventKey="second">
	                  <Grid>
	                      <Row>
	                        <Col  md={3}>
	                          <Image src={Cake} style={{width: 150}}  />
	                        </Col>
	                        <Col  md={4}>
	                          <Image src={Strawberry} style={{width: 150}} />
	                        </Col>
	                        <Col  md={4}>
	                          <Image src={IceCream} style={{width: 150}} />
	                        </Col>
	                      </Row>
	                    </Grid>	                  
	                  </Tab.Pane>
	                  <Tab.Pane eventKey="third">
	                  <Grid>
	                      <Row>
	                        <Col  md={3}>
	                          <Image src={Limonad} style={{width: 150}}  />
	                        </Col>
	                        <Col  md={4}>
	                          <Image src={Coctaile} style={{width: 150}} />
	                        </Col>
	                        <Col  md={4}>
	                          <Image src={Mohito} style={{width: 150}} />
	                        </Col>
	                      </Row>
	                    </Grid>	                  
	                  </Tab.Pane>
	                </Tab.Content>
	              </Col>
	            </Row>
	          </Tab.Container>;
	        </div>
        );
    }
}

export default Menu;