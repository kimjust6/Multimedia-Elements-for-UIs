import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import "./navbar.css";

function Navigation() {
  return (
    <div>
      <Navbar  fixed="top" bg="dark" variant="dark" expand="lg">
        <Container >
          <Navbar.Brand as={Link} to="/~bth645_221a18/about">Justin Kim</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/~bth645_221a18/about">About Me</Nav.Link>
              <Nav.Link as={Link} to="/~bth645_221a18/design">Design</Nav.Link>
              
              <NavDropdown title="Assignments" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/~bth645_221a18/assignments/1">
                  Assignment 1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/~bth645_221a18/assignments/2">
                  Assignment 2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/~bth645_221a18/assignments/3">
                  Assignment 3
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Labs" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/~bth645_221a18/labs/1">Lab 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/~bth645_221a18/labs/2">Lab 2</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/~bth645_221a18/labs/3">Lab 3</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/~bth645_221a18/labs/4">Lab 4</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/~bth645_221a18/labs/5">Lab 5</NavDropdown.Item>
                
              </NavDropdown>
            

              <Nav.Link as={Link} to="/~bth645_221a18/policy">Academic Policy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  );
}

export default Navigation;
