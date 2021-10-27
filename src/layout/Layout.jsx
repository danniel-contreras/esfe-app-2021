import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar className="navbar-ui" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            ESFE 2021
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >
                <Link className="text-white" to="/users">Usuarios</Link>
              </Nav.Link>
              <Nav.Link >
                <Link className="text-white" to="/sites">Sitios</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
