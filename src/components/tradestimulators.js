import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";


class TradeStimulators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/tradestimulatorsCollection.json')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Trade Stimulators | Buying and Selling Antique Slot Machines and Vintage Coin-Op | Antique Slots</title>
        </Helmet>
        <HalfHero title="TRADE STIMULATORS" image="/images/home/banner/img2.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </>
    );
  }
}

export default TradeStimulators