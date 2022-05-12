import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
       <div className='top'>
        <Nav className="justify-content-center" activeKey="/">
        <Nav.Item >
          <NavLink className='menu ' to='/breakfast'>Breakfast</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className='menu' to='/lunch'>Lunch</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className='menu' to='/dinner'>Dinner</NavLink>
        </Nav.Item>
       
      </Nav>
       </div>
    );
};

export default Menu;