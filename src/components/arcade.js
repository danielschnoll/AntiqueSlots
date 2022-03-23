import React from "react";
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
      <div>
        <HalfHero title="ARCADE GAMES" image="/images/home/banner/img1.jpg" />
        <GridContainer data={this.state.data} isMachineForSale={false}/>
      </div>
    );
  }
}

export default ArcadeGames