import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
       <div className='top'>
            <Nav className="justify-content-center" activeKey="/">
        <Nav.Item >
          <Link className='menu active' to='/breakfast'>Breakfast</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className='menu active' to='/lunch'>Lunch</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className='menu active' to='/dinner'>Dinner</Link>
        </Nav.Item>
       
      </Nav>
       </div>
    );
};

export default Menu;