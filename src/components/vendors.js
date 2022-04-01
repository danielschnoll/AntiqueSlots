import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";


class Vendors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/vendorsCollection.json')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Vendors and Dispensers | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title="VENDORS AND DISPENSERS" image="/images/home/banner/img3.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </>
    );
  }
}

export default Vendors