import "bootstrap/dist/css/bootstrap.css";
import { Dropdown, Nav, Navbar, Container } from "react-bootstrap";
import logo1 from "../image/logo.png";

function Menu() {
  return (
    <div className="sticky-top">
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0 sticky-top"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className=" text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className=" text-light">
              TV Show
            </Nav.Link>
            <Nav.Link href="#action3" className=" text-light">
              Movie
            </Nav.Link>
          </Nav>
          {/* <Dropdown>
            <Dropdown.Toggle
              href="#action1"
              className="me-auto my-2 my-lg-0 text-danger"
            >
              <img src={logo1} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Nav.Link
            href="#action1"
            className="me-auto my-2 my-lg-0 text-danger"
            navbarScroll
          >
            <img src={logo1} alt="" />
          </Nav.Link> */}

          {/* <Button variant="light" className="px-4 text-danger py-0">
            Login
          </Button>
          <Button variant="danger" className="text-light mx-3 my-1 px-3 py-0">
            Register
          </Button> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;

<div
  role="listbox"
  aria-expanded="false"
  class="ui top left pointing dropdown"
  tabindex="0"
>
  <span>
    <img src="../image/Ellipse 1.png" class="ui avatar image" /> Sanford Wiza
  </span>
  <div class="menu transition">
    <div
      style="pointer-events:all"
      role="option"
      aria-checked="false"
      aria-selected="true"
      class="selected item"
    >
      <i aria-hidden="true" class="user icon"></i>
      <span class="text">Account</span>
    </div>
    <div>
      <i aria-hidden="true" class="settings icon"></i>
      <span class="text">Settings</span>
    </div>
    <div
      style="pointer-events:all"
      role="option"
      aria-checked="false"
      aria-selected="false"
      class="item"
    >
      <i aria-hidden="true" class="sign out icon"></i>
      <span class="text">Sign Out</span>
    </div>
  </div>
</div>;
