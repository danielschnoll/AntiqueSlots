import React from "react";
import HalfHero from "../containers/halfHero";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Helmet from "react-helmet";
import { PhoneVibrate, PinMap, EnvelopeCheck, Facebook} from "react-bootstrap-icons";

import "./contact.scss"


class Contact extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Contact Us | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title="CONTACT US" image="/images/home/banner/img1-half.jpeg" />
        <Container flex>
          <Row style={{padding:"40px 20px 40px 20px"}}>

            <Col lg={3}>
              <Row>
                <Col>
                  <PinMap className="iconStyle" size={80}/>
                </Col>
                <Col>
                  <span className="label">Location:<p><a href="https://www.google.com/maps/place/Mahwah,+NJ+07430/">Mahwah, NJ</a></p></span>
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <Row>
                <Col>
                  <PhoneVibrate className="iconStyle" size={80}/>
                </Col>
                <Col>
                  <span className="label">Call:<p><a href="tel:2017882623">201-788-2623</a></p></span>
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <Row>
                <Col>
                  <EnvelopeCheck className="iconStyle" size={80}/>
                </Col>
                <Col>
                  <span className="label">Email:<p><a href="mailto:ken@antiqueslots.com">ken@antiqueslots</a></p></span>
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <Row>
                <Col>
                  <Facebook className="iconStyle" size={80}/>
                </Col>
                <Col>
                  <span className="label">Facebook:<p><a href="https://facebook.com/antiqueslots">AntiqueSlots</a></p></span>
                </Col>
              </Row>
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
                <Form name="contact" style={{padding:20}} method="POST" data-netlify="true" netlify-honeypot="anti-spam">
                <input type="hidden" name="anti-spam" value="contact" />
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPersonName" required>
                        <input type="text" name="name" className="form-control" placeholder="Name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPhoneNumber" required>
                        <input type="tel" name="phone" className="form-control" placeholder="Phone Number" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formEmailAddress">
                    <input type="email" name="email" className="form-control" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-12" controlId="formMessage">
                    <textarea name="message" className="form-control" placeholder="Message" rows={10} cols={40}/>
                  </Form.Group>
                  <br/>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Contact