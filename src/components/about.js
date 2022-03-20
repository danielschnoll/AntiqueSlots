import React from "react";
import HalfHero from "../containers/halfHero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

import "./about.scss"

class About extends React.Component {
  render() {
    return (
      <div>
        <HalfHero title="ABOUT US" image="/images/home/banner/img1.jpg"/>
        <Container style={{padding:"40px 20px 40px 20px"}}>
          <Row>
            <Col md={6}>
              <p className="intro">
                HELLO, MY NAME IS KEN!
              </p>
              <p className="body">
                I HAVE BEEN BUYING, SELLING, AND COLLECTING <strong>ANTIQUE SLOT MACHINES, PINBALL MACHINES,
                TRADE STIMULATORS, ARCADE GAMES, AND OTHER VINTAGE COIN-OPERATED MACHINES </strong>
                FOR OVER 45 YEARS!
              </p>
              <p className="body">
                FEEL FREE TO CONTACT ME BELOW AND LET ME KNOW WHAT YOU HAVE, OR IF THERE ARE
                ANY MACHINES YOU ARE INTERESTED IN.
              </p>
              <p className="body">
                <Card border="dark">
                  <Card.Header>Ken Schnoll</Card.Header>
                  <Card.Body>
                    <Card.Title>Cell: (201)-788-2623, feel free to <a href="sms:12017882623">Text</a> or <a href="tel:12017882623">Call</a></Card.Title>
                    <Card.Title>Email: <a href="mailto:ken@antiqueslots.com">ken@antiqueslots.com</a></Card.Title>
                    <Card.Title>Location: Mahwah, New Jersey</Card.Title>
                  </Card.Body>
                </Card>
              </p>
            </Col>
            <Col md={6}>
              <p className="intro">
                <Carousel fade className ="aboutStyle">
                  <Carousel.Item interval={5000}>
                    <img
                      src="/images/about/rolatop.jpg"
                      alt="Watling 10c Rol-A-Top Slot Machine"
                      className ="aboutStyle"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      src="/images/about/bankaball.jpg"
                      alt="Gottlieb Bank-A-Ball Pinball Machine"
                      className ="aboutStyle"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      src="/images/about/puck.jpg"
                      alt="Illinois Machine Co. - 5c Puck Upright Slot Machine"
                      className ="aboutStyle"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      src="/images/about/cyclone.jpg"
                      alt="Williams Cyclone Pinball Machine"
                      className ="aboutStyle"
                    />
                  </Carousel.Item>
                </Carousel>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About