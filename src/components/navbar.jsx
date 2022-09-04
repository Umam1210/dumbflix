import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Nav, Navbar,Container,Modal, Form} from 'react-bootstrap';
import logo1 from '../image/logo.png'
import React, { useState } from 'react';
import foto from '../image/Ellipse 1.png'

function Menu() {
  
  return ( <>
  


    <div className="sticky-top">
                <Navbar bg="dark" expand="lg">
                     <Container fluid>
                       <Nav
                            className="me-auto my-2 my-lg-0 sticky-top"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className=" text-light mx-2"> Home</Link>

                            <Link to="/tv" className=" text-light mx-2">TV Show</Link>
                            <Link to="/movies" className=" text-light mx-2">Movie</Link>
                        </Nav>
                        <Nav.Link href="#action1"
                            className="me-auto my-2 my-lg-0 text-danger"
                            navbarScroll
                        ><img src={logo1} alt="" /></Nav.Link>
                        
                        <img src={foto} alt="" />
      </Container>
    </Navbar>
    </div>
    </>
  );
}

export default Menu;
