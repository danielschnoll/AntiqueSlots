import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";


class Pinball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/pinballCollection.json')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Vintage Pinball Machines | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title="PINBALL MACHINES" image="/images/home/banner/img2.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </>
    );
  }
}

export default Pinball