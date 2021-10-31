import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../LoginHooks/useAuth';


const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <>
       
 <Navbar  bg="light" variant="dark" sticky='top' collapseOnSelect expand="lg" >
 <Container >
 <Navbar.Brand className='text-black' href="#home">D O O R </Navbar.Brand>
<Navbar.Toggle />
 <Navbar.Collapse className="justify-content-end ">

        <Nav.Link className='text-black' as={ HashLink } to="/home#home">Home</Nav.Link>
        <Nav.Link className='text-black' as={ HashLink } to="/services">Service</Nav.Link>
        
         <Nav.Link className='text-black' as={ HashLink } to="/addservice">Add-Service</Nav.Link>
         
         <Nav.Link className='text-black' as={ HashLink } to="/myOrder">My Order</Nav.Link>
         <Nav.Link className='text-black' as={ HashLink } to="/manageAllOrder">Manage All Order</Nav.Link>

         <Link className='text-black' to='/manageservice'>Manage-Service</Link>
      
         {user?.email ? 
           <Button className='text-black' onClick={logOut} variant="dark">Logout</Button>:
          <Nav.Link className='text-black' as={ HashLink } to="/login">Login</Nav.Link>}
      <Navbar.Text className='text-black'>
        Signed in as: <a className='text-black' href="#login">{user?.displayName}</a>
       
      </Navbar.Text>
    </Navbar.Collapse>
 </Container>
</Navbar>

        </>
    );
};

export default Header;