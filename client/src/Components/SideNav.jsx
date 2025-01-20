import React from 'react'
import Nav from 'react-bootstrap/Nav';
import '../Portfolio.css';

const SideNav = () => {
  return (
    <>

    <Nav defaultActiveKey="#" className="flex-column sideNav">
    <Nav.Link href="#">Welcome</Nav.Link>
    <Nav.Link eventKey="#">My Goals</Nav.Link>
    <Nav.Link eventKey="#">Coursework</Nav.Link>
    <Nav.Link eventKey="#">Learning Outside of Class</Nav.Link>

  </Nav>
  </>
  )
}

export default SideNav