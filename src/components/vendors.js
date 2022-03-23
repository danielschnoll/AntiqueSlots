import React from "react";
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
      <div>
        <HalfHero title="VENDORS AND DISPENSERS" image="/images/home/banner/img3.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </div>
    );
  }
}

export default Vendors