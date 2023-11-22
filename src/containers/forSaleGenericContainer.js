import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Truck, CurrencyDollar } from "react-bootstrap-icons";

import Image from "./image";
import BackToTop from "./backToTop";

import "./forSaleGenericContainer.scss"

class ForSaleContainer extends React.Component {
	render() {
		return (
			<Container flex style={{ position: "relative" }}>
				<Row style={{ padding: "40px 20px 40px 20px" }}>
					<Col lg={6}>
						<Image
							link={this.props.link}
						/>
					</Col>
					<Col lg={6}>
						<Card border="light">
							<p className="description">
								{this.props.description}
							</p>
							<p className="description">
								For questions, comments, or to arrange payment, feel free to contact me at <a href="mailto:ken@antiqueslots.com">ken@antiqueslots.com</a> or text/call at <a href="sms:2017882623">201-788-2623</a>
							</p>
							<p className="priceandship">
								<CurrencyDollar style={{ verticalAlign: "-.125em" }} />{this.props.price} USD
							</p>
							<p className="priceandship">
								<Truck style={{ verticalAlign: "-.125em" }} /> Shipping within the US
							</p>
						</Card>
					</Col>
				</Row>
				<Row>
					{this.props.images.map((machine) => (
						<Col key={machine.name} lg={4}>
							<Image
								link={machine}
							/>
						</Col>
					))}
				</Row>
			<BackToTop/>
			</Container>
		);
	}
}

export default ForSaleContainer