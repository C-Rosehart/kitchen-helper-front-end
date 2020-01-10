import React from "react";
import { Link } from "react-router-dom";
// import MobileMenu from "../Components/Mobile-Menu";
<<<<<<< Updated upstream:src/Components/Nav-Menu.js
import DesktopMenu from "../Components/Desktop-Menu";
import Context from "../Components/Context";

// function isMobile() {
//   if (window.innerWidth < 1200) {
//     return true;
//   }
//   return false;
// }
=======
import DesktopMenu from "../Menu/Desktop-Menu";
import Context from "../Context/Context";
>>>>>>> Stashed changes:src/Components/Nav-Menu/Nav-Menu.js

export default class NavMenu extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return (
      <header className="Nav-Header">
        <Link to="/Landing"></Link>
        <DesktopMenu
          state={this.state}
          routeProps={this.props}
          LightMode={this.toggleLightMode}
          renderLoginLink={this.renderLoginLink}
          renderLogoutLink={this.renderLogoutLink}
        />
      </header>
    );
  }
}
