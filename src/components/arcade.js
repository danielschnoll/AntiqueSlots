import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../containers/halfHero";
import GridContainer from "../containers/gridContainer";


class ArcadeGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../data/arcadeCollection.json')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Vintage Arcade Games | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title="ARCADE GAMES" image="/images/home/banner/img1.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </>
    );
  }
}

export default ArcadeGames