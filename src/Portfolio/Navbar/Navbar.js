import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  renderNavbar(item) {
    return (
      <li>
        <a className={item.cName} href={item.url}>
          {item.title}
        </a>
      </li>
    );
  }     

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          {" "}
          <a href="./">harshil s.</a>{" "}
        </h1>
        <div className="menu-icon" onClick={() => this.handleClick()}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
          {MenuItems.map(this.renderNavbar)}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
