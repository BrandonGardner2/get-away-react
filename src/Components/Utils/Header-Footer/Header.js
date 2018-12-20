import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import User from "../../User/User";

export default class Header extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div style={{ minHeight: "10vh" }}>
        <Navbar color="dark" expand="md">
          <NavbarBrand
            className="text-white ml-3"
            style={{
              fontFamily: "pacifico",
              fontSize: "3rem"
            }}
            href="/"
          >
            Get Away
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="navbar-dark" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-3" navbar style={{ fontSize: "1.2rem" }}>
              <NavItem>
                <NavLink className="text-white" href="/components/">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-white"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <User />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
