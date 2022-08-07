import React from 'react';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavHeader = () => {
  return (
    <div class="nav">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="hostels">View Hostels</Nav.Link>
        </Nav.Item>

        </Nav>
      </div>
  );
};

export default NavHeader;