
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav className='navt' fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/" >Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about" eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="buy" eventKey="link-2">Buy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/sell" eventKey="link-3">
          Sell
        </Nav.Link>
      </Nav.Item>
    </Nav>
  
  )
}

export default NavBar