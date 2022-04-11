import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const navbar = () => {
  const style = {
    color: "white",
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#1" style={style}>
            List of Users
          </Nav.Link>
          <Nav.Link href="#2" style={style}>
            Users great then (19)
          </Nav.Link>
          <Nav.Link href="#3" style={style}>
            Sum of age
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navbar;
