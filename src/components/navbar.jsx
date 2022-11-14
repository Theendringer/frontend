import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from "react";
import logo from '/logo.png'




function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} height={30} width={30} className="d-block "/>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Unisalas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;