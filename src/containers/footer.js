import React from "react";
import './footer.scss';

function getDate() {
  return new Date().getFullYear()
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <p>Mahwah, NJ 07430 / <a href="tel:2017882623">(201)-788-2623</a> / <a href="mailto:kschnoll@aol.com">ken@antiqueslots.com</a></p>
          <p>Copyright Ⓒ AntiqueSlots {getDate()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;