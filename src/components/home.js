import React from "react";
import Container from "react-bootstrap/Container";
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
      <div>
        <Hero/>
        <Container style={{marginTop: 75, marginBottom: 75}} className="text-center">
          <h1>Recent Purchases</h1>
          <GridContainer data={this.state.data} isMachineForSale={false} isRecentPurchase={true}/>
        </Container>
      </div>
  );
  }
}

export default Home;