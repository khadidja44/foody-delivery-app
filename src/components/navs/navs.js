import React from "react";
import './navs.css' ;
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from './../../assets/logo.svg'


const Navs = ()=>{
    return(
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} title="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="#link">Explore food</Nav.Link>
              <Nav.Link href="#link">Faq</Nav.Link>
            </Nav>
            <Nav>
             <Nav.Link id='number'>0123456789</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navs;
