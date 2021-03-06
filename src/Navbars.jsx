import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import cartIcon from './images/cart-icon.png';
// import './Css/Navbar.css'


const Navbars = () =>
{   
    return(
        <>

          <Navbar bg="white" className='container-fluid' expand="lg">
          <Navbar.Brand className='navBrand' style={{fontSize : '45px'}}>PIZZA</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav className="ml-auto text-dark"> */}
          <Nav.Link className='text-dark navi text-center pt-2 pl-4' style= {{textDecoration:'none' , font : 'bold', marginLeft : 'auto',letterSpacing: '2px',fontSize :'500px', fontWeight:'800'}} to="#"><h6>Chow Down!</h6></Nav.Link>
          {/* <Link className='text-dark navi text-center pt-2 pl-4' style= {{textDecoration:'none'}} to="#"><h6>Register</h6></Link> */}
          {/* <Link className='text-dark navi text-center pt-2 pl-4' style= {{textDecoration:'none'}} to="/logout"><h6>Logout</h6></Link> */}
          {/* <Link className='text-dark navi text-center pt-2 pl-4' style= {{textDecoration:'none'}} to='/cart'><img style={{height: '30px'}} src={cartIcon} alt='cart'/></Link> */}

          {/* </Nav> */}
          {/* </Navbar.Collapse> */}
          </Navbar>
        </>
    )
}

export default Navbars; 