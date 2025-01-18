import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Portfolio.css';




const NavBar = () => {
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary navStyles">
      <Container fluid>
        <Navbar.Brand href="/">Aubrey Jones E-Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/chemistry1010">Chemistry 1010</Nav.Link>
            <Nav.Link href="/math990">Math 990</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
   
   
   
   </>
  )
}

export default NavBar