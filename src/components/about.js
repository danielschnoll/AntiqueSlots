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
                HEY! MY NAME IS KEN SCHNOLL, AND WELCOME TO ANTIQUE SLOTS!
              </p>
              <p className="body">
                I HAVE BEEN BUYING, SELLING, AND COLLECTING <strong><i>ANTIQUE SLOT MACHINES, PINBALL MACHINES,
                TRADE STIMULATORS, ARCADE GAMES, AND OTHER VINTAGE COIN-OPERATED MACHINES </i></strong>
                FOR OVER 45 YEARS!
              </p>
              <p className="body">
                WE ARE ALWAYS BUYING MACHINES, FEEL FREE TO CONTACT ME BELOW AND LET ME KNOW WHAT YOU HAVE!
              </p>
              <p className="body">
                <Card border="dark">
                  <Card.Header>Ken Schnoll</Card.Header>
                  <Card.Body>
                    <Card.Title>Cell: (201)-788-2623, feel free to <a href="sms:12017882623">Text</a> or <a href="tel:12017882623">Call</a></Card.Title>
                    <Card.Title>Email: <a href="mailto:kschnoll@aol.com">ken@antiqueslots.com</a></Card.Title>
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
                      src="/images/about/rolatop.jpeg"
                      alt="Watling 10c Rol-A-Top Slot Machine"
                      className ="aboutStyle"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      src="/images/about/bankaball.jpeg"
                      alt="Gottlieb Bank-A-Ball Pinball Machine"
                      className ="aboutStyle"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      src="/images/about/puck.jpeg"
                      alt="Illinois Machine Co. - 5c Puck Upright Slot Machine"
                      className ="aboutStyle"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      src="/images/about/cyclone.jpeg"
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