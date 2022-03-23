import React from "react";
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
      <div>
        <HalfHero title="MACHINES FOR SALE" image="/images/home/banner/img3.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </div>
    );
  }
}

export default MachinesForSale