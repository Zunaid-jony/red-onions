import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavLink, Button } from 'react-bootstrap';
import Img from '../images/logo2.png'
import Benar from './benar/Benar';
import { FiShoppingCart } from 'react-icons/fi';
import { AiTwotoneHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <div className='fixed-top'>
            {/* <nav>
          <ul>
            <li>
              <Link to="/login">Home</Link>
            </li>
            <li>
              <Link to="/registration">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
            */}
           
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" sticky="top" >
                <Container>
                <Navbar.Brand><img src={Img} className="logo" ></img> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    
                </Nav>
                <Nav  >
                <Nav.Link className='nav-color' ><FiShoppingCart></FiShoppingCart> </Nav.Link>
                     <Link NavLink   className='nav-color' to="/"> <AiTwotoneHome></AiTwotoneHome></Link>

                   {user?.email?
                    <Button className='nav-color But' onClick={logOut} variant="">LogOut</Button> :
                    <Link NavLink   className='nav-color' to="/login">Login</Link>
                    }
                    {user?.email?
                    <Link NavLink   className='nav-color' to="/login"> <img id='profile' src={user.photoURL}  style={{borderRadius:'50px', width:'40px'}}></img></Link>:

                    <Link   eventKey={2} to="/registration" className='nav-color sign-up'>
                    Sign up
                    </Link>}
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        
            
        </div>
    );
};

export default Header;