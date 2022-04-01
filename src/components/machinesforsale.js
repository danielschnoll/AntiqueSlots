import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";


class MachinesForSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/machinesForSale.json')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Coin Operated Machines for Sale | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title="MACHINES FOR SALE" image="/images/home/banner/img3.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </>
    );
  }
}

export default MachinesForSale