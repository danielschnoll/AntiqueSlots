import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../../containers/halfHero";
import ForSaleContainer from "../../containers/forSaleGenericContainer";

class GrandStand extends React.Component {
  constructor(props) {
    super(props);
    this.data = require('../../data/machinesForSale.json')
    this.data = this.data.list[1]
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.data.name} | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title={this.data.name} image="/images/home/banner/img6-half.jpeg" />
        <ForSaleContainer
          link={this.data.link}
          price={"500"}
          images={this.data.images}
          description={"The Jennings Grandstand is a unique baseball-themed 3-reeled trade stimulator. This Grandstand is missing the backdoor and coin drop cover\
                        plate. The machine is jammed and will need some maintenance, but was working when we first got it. The reel strips are original to the \
                        machine. Inside the gum vendor area, there is a chip in the pot metal. We are unsure if the gum vendor works."}
        />
      </>
    );
  }
}

export default GrandStand