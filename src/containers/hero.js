import Button from "react-bootstrap/Button";
import React from "react";
import { Carousel } from "react-bootstrap";
import './hero.scss'

class Hero extends React.Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            className="image"
            src="/images/home/banner/img1.jpg"
            alt="Antique Slots - Antique Slot Machines - Watling Rol-a-Top, Mills Horsehead Bonus, Jennings Hunting Scene Chief"
          />
          <Carousel.Caption>
            <h1 className="headerTitle">ANTIQUE SLOTS</h1>
            <hr />
            <h2 className="headerCaption">Buying and Selling Antique Slot Machines, Pinball Machines, and other Vintage Coin-Op for over 40 years</h2>
            <hr />
            <Button variant="outline-light" size="lg" href="/AboutUs">About Us</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="image"
            src="/images/home/banner/img2.jpg"
            alt="Antique Slots - Antique Slot Machines - Jennings Dutch Boy, Watling Treasury, Jennings 25c Golf Ball Dispenser"
          />
          <Carousel.Caption>
            <h1 className="headerTitle">ANTIQUE SLOTS</h1>
            <hr />
            <h2 className="headerCaption">Buying and Selling Antique Slot Machines, Pinball Machines, and other Vintage Coin-Op for over 40 years</h2>
            <hr />
            <Button variant="outline-light" size="lg" href="/AboutUs">About Us</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="image"
            src="/images/home/banner/img3.jpg"
            alt="Antique Slots - Antique Slot Machines - Groetchen Pikes Peak, Bally Reliance, Mills 5c Around the World QT"
          />
          <Carousel.Caption>
            <h1 className="headerTitle">ANTIQUE SLOTS</h1>
            <hr />
            <h2 className="headerCaption">Buying and Selling Antique Slot Machines, Pinball Machines, and other Vintage Coin-Op for over 40 years</h2>
            <hr />
            <Button variant="outline-light" size="lg" href="/AboutUs">About Us</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Hero;