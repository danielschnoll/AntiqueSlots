import React from "react";
import Helmet from "react-helmet";

import HalfHero from "../../containers/halfHero";
import ForSaleContainer from "../../containers/forSaleGenericContainer";

class Poinsettia extends React.Component {
  constructor(props) {
    super(props);
    this.data = require('../../data/machinesForSale.json')
    this.data = this.data.list[0]
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.data.name} | Buying and Selling Coin Operated Antique Slot Machines | Antique Slots</title>
        </Helmet>
        <HalfHero title={this.data.name} image="/images/home/banner/img2-half.jpeg" />
        <ForSaleContainer
          link={this.data.link}
          price={"850"}
          images={this.data.images}
          description={"Up for sale is a Mills 5c Poinsettia. There is a small crack by the gooseneck that was repaired, and the machine has a repro back door and lock.\
                        Reel strips are original tin tapes, but slightly faded. The wood cabinet has the original Mills stickers. \
                        The handle has some rust that can easily be buffed out. The mechanism is a bit dirty, but the machine functions well overall."}
        />
      </>
    );
  }
}

export default Poinsettia