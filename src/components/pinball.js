import React from "react";
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
      <div>
        <HalfHero title="PINBALL MACHINES" image="/images/home/banner/img2.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </div>
    );
  }
}

export default Pinball