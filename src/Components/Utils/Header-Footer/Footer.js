import React from "react";

import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light border-top border-secondary"
      style={{ minHeight: "10vh" }}
    >
      <Navbar className="justify-content-center">
        <Nav navbar>
          <NavItem>
            <NavLink className="text-white" href="/components/">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="/components/">
              Docs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="/components/">
              Contact
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
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
