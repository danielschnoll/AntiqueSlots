import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./image";

class GridContainer extends React.Component {
  render() {
    return (
      <Container flex>
        <Row style={{ padding: "40px 20px 40px 20px" }}>
          {this.props.data["list"].map((machine) => (
            <Col key={machine.name} lg={4}>
              <Image name={machine.name} 
                link={machine.link} 
                purchase={machine.purchaseDate} 
                isMachineForSale={this.props.isMachineForSale}
                isRecentPurchase={this.props.isRecentPurchase}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default GridContainer;