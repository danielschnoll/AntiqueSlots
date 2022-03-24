import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container } from "react-bootstrap";

import "./navigation.scss"

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={"/libertybell.svg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            AntiqueSlots
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navcolor" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navcolor" href="/">Home</Nav.Link>
              <Nav.Link className="navcolor" href="/AboutUs">About</Nav.Link>
              <NavDropdown menuVariant="dark"
                title={<span className="text-white">Collections</span>}
                id="basic-nav-dropdown">
                <NavDropdown.Item href="/SlotMachines">Slot Machines</NavDropdown.Item>
                <NavDropdown.Item href="/PinballMachines">Pinball Machines</NavDropdown.Item>
                <NavDropdown.Item href="/TradeStimulators">Trade Stimulators</NavDropdown.Item>
                <NavDropdown.Item href="/VendorsAndDispensers">Vendors and Dispensers</NavDropdown.Item>
                <NavDropdown.Item href="/ArcadeGames">Vintage Arcade Games</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navcolor" href="/MachinesForSale">Machines For Sale</Nav.Link>
              <Nav.Link className="navcolor" href="/PartsForSale">Parts For Sale</Nav.Link>
              <Nav.Link className="navcolor" href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;