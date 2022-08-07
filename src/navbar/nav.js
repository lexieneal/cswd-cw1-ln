import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavHeader = () => {
  return (
    <>
      <Navbar>
        <Container>
            <Link to="/" className="text-decoration-none text-white navbar-brand">Home</Link>
          <Nav>
              <Link to="hostels" className="text-decoration-none text-white nav-link">Hostels</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavHeader