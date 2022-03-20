import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Hero from '../containers/hero'

class Home extends React.Component {
  render(){
    return (
      <div>
        <Hero/>
        <Container style={{marginTop: 75, marginBottom: 75}} className="text-center">
          <h1>Recent Purchases</h1>
          <Row>
            <Col md={4}>Machine 1</Col>
            <Col md={4}>Machine 2</Col>
            <Col md={4}>Machine 3</Col>
          </Row>
        </Container>
      </div>
  );
  }
}

export default Home;