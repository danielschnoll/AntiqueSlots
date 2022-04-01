import React from "react";
import Container from "react-bootstrap/Container";
import Helmet from "react-helmet";

import Hero from '../containers/hero'
import GridContainer from "../containers/gridContainer";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/newPurchases.json')
    }
  }
  
  render(){
    return (
      <>
        <Helmet>
          <title>Home | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <Hero/>
        <Container style={{marginTop: 75, marginBottom: 75}} className="text-center">
          <h1>Recent Purchases</h1>
          <GridContainer data={this.state.data} isMachineForSale={false} isRecentPurchase={true}/>
        </Container>
      </>
  );
  }
}

export default Home;