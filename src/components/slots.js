import React from "react";
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
      <div>
        <HalfHero title="SLOT MACHINES" image="/images/home/banner/img1.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </div>
    );
  }
}

export default Slots