import Button from "react-bootstrap/Button";
import React from "react";
import { Carousel } from "react-bootstrap";
import './hero.scss'

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/frontPageHero.json')
    }
  }

  render() {
    return (
      <Carousel fade>
        {[...Array(7)].map((x, i) =>
          <Carousel.Item interval={5000} key={i + 1}>
            <img
              className="image"
              src={"/images/home/banner/img" + (i + 1).toString() + ".jpeg"}
              alt={"Antique Slots - " + this.state.data.list[i].alt}
            />
            <Carousel.Caption>
              <h1 className="headerTitle">ANTIQUE SLOTS</h1>
              <hr />
              <h2 className="headerCaption">Buying and Selling Antique Slot Machines, Pinball Machines, and other Vintage Coin-Op for over 45 years</h2>
              <hr />
              <Button variant="outline-light" size="lg" href="/AboutUs">About Us</Button>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    );
  }
}

export default Hero;