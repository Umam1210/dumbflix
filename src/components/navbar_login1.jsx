import "bootstrap/dist/css/bootstrap.css";
import {Button, Nav, Navbar,Container} from 'react-bootstrap';
import logo1 from '../image/logo.png'

function Menu() {
  return (
    <div className="sticky-top">
      <Navbar bg="dark" expand="lg">
      <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0 sticky-top"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className=" text-light">Home</Nav.Link>
            <Nav.Link href="#action2" className=" text-light">TV Show</Nav.Link>
            <Nav.Link href="#action3"className=" text-light">Movie</Nav.Link>
          </Nav>  
          <Nav.Link href="#action1"  
          className="me-auto my-2 my-lg-0 text-danger"
            navbarScroll
            ><img src={logo1} alt="" /></Nav.Link>

            <Button variant="light" className="px-4 text-danger py-0" >Login</Button>
            <Button variant="danger" className="text-light mx-3 my-1 px-3 py-0">Register</Button>
       
      </Container>
    </Navbar>
    </div>
  );
}

export default Menu;