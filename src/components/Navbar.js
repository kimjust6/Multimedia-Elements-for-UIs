import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React from "react";

function Navigation() {
  return (
    <div>
      <Navbar  fixed="top" bg="dark" variant="dark" expand="lg">
        <Container >
          <Navbar.Brand href="#about">Justin Kim</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link href="#about">About Me</Nav.Link>
              <NavDropdown title="Assignments" id="basic-nav-dropdown">
                <NavDropdown.Item href="#assignments/1">
                  Assignment 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#assignments/2">
                  Assignment 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#assignments/3">
                  Assignment 3
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Labs" id="basic-nav-dropdown">
                <NavDropdown.Item href="#lab/1">Lab 1</NavDropdown.Item>
                <NavDropdown.Item href="#lab/2">Lab 2</NavDropdown.Item>
                <NavDropdown.Item href="#lab/3">Lab 3</NavDropdown.Item>
                <NavDropdown.Item href="#lab/4">Lab 4</NavDropdown.Item>
                <NavDropdown.Item href="#lab/5">Lab 5</NavDropdown.Item>
              </NavDropdown>
            

              <Nav.Link href="#policy">Academic Policy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  );
}

export default Navigation;
