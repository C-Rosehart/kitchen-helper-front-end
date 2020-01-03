import React from "react";
import { Link } from "react-router-dom";
import Context from "../Components/Context";

export default class DesktopMenu extends React.Component {
  static contextType = Context;

  render() {
    console.log(this.context.isLoggedIn);
    const LightModeToggle = this.context.isLight
      ? "far fa-moon fa-fw"
      : "far fa-lightbulb fa-fw";
    return (
      <div className="desktopMenu">
        {this.context.isLoggedIn ? (
          <div className="Header__logged-in">
            <div class="dropdown">
              <button class="dropbtn">
                {this.context.currentUser.username}
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <Link to={`/user/${this.context.currentUser.username}`}>
                  My Account
                </Link>
                <Link to="/Create-Recipe">Create Recipe</Link>
                <Link onClick={this.context.onLogout} to="/Home">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="Header__logged-out">
            <Link to="/login">Log in</Link>
            <Link to="/create-account">Register</Link>
          </div>
        )}
        <form className="Desktop-Menu-UserSearchForm">
          <label className="field a-field a-field_a2">
            <input
              className="field__input a-field__input"
              placeholder="Search"
              required
            />
            <span className="a-field__label-wrap">
              <span className="a-field__label">Search</span>
            </span>
          </label>
          <button type="submit">search</button>
        </form>
        <div className="DarkMode">
          <button className="LightModeToggle" onClick={this.context.LightMode}>
            <i className={LightModeToggle}></i>
            <p>Too bright? Click me.</p>
          </button>
        </div>
      </div>
    );
  }
}
