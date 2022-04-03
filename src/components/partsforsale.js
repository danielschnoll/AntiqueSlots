import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";

import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";

import './partsforsale.scss'

class PartsForSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/partsForSale.json')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Slot Machine Parts for Sale | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title="PARTS FOR SALE" image="/images/home/banner/img6-half.jpeg" />
        <Container style={{paddingTop:"20px"}}>
          <h3 className="text-center">Everything currently in our inventory is listed for sale on this parts page. If it isn't pictured, we do not have it. 
            Please <a href="/contact">contact us</a> if you are interested in purchasing parts. Include the Bin Name and Letter/Number in your inquiry. Thanks!
          </h3>
        </Container>
        <GridContainer data={this.state.data} />
      </>
    );
  }
}

export default PartsForSale