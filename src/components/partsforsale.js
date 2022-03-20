import React from "react";
import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";


class PartsForSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/partsForSale.json')
    }
  }

  render() {
    return (
      <div>
        <HalfHero title="PARTS FOR SALE" image="/images/home/banner/img2.jpg" />
        <GridContainer data={this.state.data} />
      </div>
    );
  }
}

export default PartsForSale