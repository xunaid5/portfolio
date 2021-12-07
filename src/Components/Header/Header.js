import React, { useEffect, useState } from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
// import {  Link } from 'react-router-dom';
import './Header.css'; 
const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    
      window.addEventListener("scroll", ()=>{
        if (window.scrollY >= 66) {
            setNavbar(true)
          } else {
            setNavbar(false)
          }
    })
  })

    return (
      
  <Navbar sticky="top" collapseOnSelect expand="lg" bg={!navbar?"none":"dark"} variant={!navbar?"light":"dark"}>
  <Container className="" >
  <Navbar.Brand className="ms-3 fs-1 text-light " href="#home">Junaid</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </Container>
  <Navbar.Collapse  className="ms-3 text-light me-1" id="responsive-navbar-nav">
    <Nav className="fs-4 text-light ">
    <Nav.Link  className="fs-4 text-light " href="about">About</Nav.Link>
      <Nav.Link className="fs-4 text-light " href="#pricing">Skills</Nav.Link>
      <Nav.Link className="fs-4 text-light " href="#deets">Projects</Nav.Link>
      <Nav.Link className="fs-4 text-light " eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  
</Navbar>
        
    );
};

export default Header;