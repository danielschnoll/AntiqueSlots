import React from "react";
import HalfHero from "../containers/halfHero";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { PhoneVibrate, PinMap, EnvelopeCheck} from "react-bootstrap-icons";

import "./contact.scss"


class Contact extends React.Component {
  render() {
    return (
      <div>
        <HalfHero title="CONTACT US" image="/images/home/banner/img2.jpg" />
        <Container flex>
          <Row style={{padding:"40px 20px 40px 20px"}}>
            <Col lg={4}>
              <PinMap className="iconStyle" size={80}/>
              <span className="labelLocation">Location:<p>Mahwah, NJ</p></span>
            </Col>
            <Col lg={4}>
              <PhoneVibrate className="iconStyle" size={80}/>
              <span className="labelCall">Call:<p><a href="tel:2017882623">(201)-788-2623</a></p></span>
            </Col>
            <Col lg={4}>
              <EnvelopeCheck className="iconStyle" size={80}/>
              <span className="labelEmail">Email:<p><a href="mailto:ken@antiqueslots.com">ken@antiqueslots.com</a></p></span>
            </Col>
          </Row>
          <p></p>
          <Row style={{padding:"0 20px 40px 20px"}}>
            <Col md={6}>
              <h2 className="text-center" style={{marginTop:30, float:"left"}}>
                Use the Contact Form to send us a message, or use the links above to call/email us directly!
              </h2>
            </Col>
            <Col md={6}>
              <Card border={"dark"}>
                <Form style={{padding:20}}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPersonName" required>
                        <Form.Control type="name" placeholder="Name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPhoneNumber" required>
                        <Form.Control type="tel" placeholder="Phone Number" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formEmailAddress">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-12" controlId="formMessage">
                    <textarea className="form-control" placeholder="Message" rows={10} cols={40}/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact