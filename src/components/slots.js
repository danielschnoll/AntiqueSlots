import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";


class Slots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/slotsCollection.json')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Antique Slot Machines | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title="SLOT MACHINES" image="/images/home/banner/img1.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </>
    );
  }
}

export default Slots