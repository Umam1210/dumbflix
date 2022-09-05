import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Form, Modal } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
// import {Form, Nav, Navbar, Container } from 'react-bootstrap';
import logo1 from "./image/logo.png";
import foto from "./image/Ellipse 1.png";

import Home from "./pages/home";
// import Example from "./pages/login";
import Movie from "./pages/movie_TV";
// import Tvseries from "./pages/TV";
import Tv from "./pages/TV";
import Menu from "./components/navbar_login1";
import Details from "./pages/Details";
import profile from "./image/profile.png";
import payment from "./image/payment.png";
import logout from "./image/log-out.png";
import rout from "./css/router.module.css";
import { CgProfile } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Profile from "./profil/profile";
import Payment from "./payment/Payment";

function DropdownItem(props) {
  return (
    <li className={rout.dropdownItem}>
      {props.children}
      <a> {props.text} </a>
    </li>
  );
}

const PrivatePage = (props) => {
  // const { setIsLogin } = props;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="sticky-top">
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Nav
              className="me-auto my-2 my-lg-0 sticky-top"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className=" text-light mx-2 text-decoration-none">
                {" "}
                Home
              </Link>

              <Link to="/tv" className=" text-light mx-2 text-decoration-none">
                TV Show
              </Link>
              <Link
                to="/movies"
                className=" text-light mx-2 text-decoration-none"
              >
                Movie
              </Link>
            </Nav>
            <Nav.Link
              href="#action1"
              className="me-auto my-2 my-lg-0 text-danger"
              navbarScroll
            >
              <img src={logo1} alt="" />
            </Nav.Link>
            <Link to="" className=" text-light mx-2 me-5 ">
              <div
                className={``}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img src={foto}></img>
              </div>
              {open && (
                <div className={rout.dropdownMenu}>
                  <ul>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/profile"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <DropdownItem text="Profile">
                        <CgProfile className="mt-0 fs-2" />
                      </DropdownItem>
                    </Link>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/payment "
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <DropdownItem text="payment">
                        <MdPayment className="mt-0 fs-2" />
                      </DropdownItem>
                    </Link>
                    <a href="">
                      <DropdownItem text="Log Out">
                        <BiLogOut className="mt-0 fs-2 text-dark" />
                      </DropdownItem>
                    </a>
                  </ul>
                </div>
              )}
            </Link>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

const GuestPage = ({ setIsLogin }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <div>
      <div className="sticky-top">
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Nav
              className="me-auto my-2 my-lg-0 sticky-top"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className=" text-light mx-2 text-decoration-none">
                {" "}
                Home
              </Link>

              <Link to="/tv" className=" text-light mx-2 text-decoration-none">
                TV Show
              </Link>
              <Link
                to="/movies"
                className=" text-light mx-2 text-decoration-none"
              >
                Movie
              </Link>
            </Nav>
            <Nav.Link
              href="#action1"
              className="me-auto my-2 my-lg-0 text-danger"
              navbarScroll
            >
              <img src={logo1} alt="" />
            </Nav.Link>

            <Button variant="light" onClick={handleShow} className="py-0">
              Login
            </Button>
            <Modal show={show} onHide={handleClose}>
              <div className="bg-dark rounded border border-dark">
                <Modal.Body className="bg-dark rounded">
                  <Modal.Title className="text-light p-0">Login</Modal.Title>
                  <Form className="bg-dark text-light" style={{}}>
                    <Form
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        autoFocus
                      />
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        autoFocus
                      />
                    </Form>
                  </Form>
                  <Button
                    variant="danger"
                    onClick={() => setIsLogin(true)}
                    className="m-0 mt-3 fw-bolder "
                    style={{ width: "100%" }}
                  >
                    login
                  </Button>
                </Modal.Body>
                <p>
                  Don't have an account? Klik <a href="http://">Here</a>
                </p>
              </div>
            </Modal>

            <div>
              <Button
                variant="danger"
                onClick={handleShow1}
                className="text-light mx-3 my-1 px-3 py-0"
              >
                Register
              </Button>
              <Modal show={show1} onHide={handleClose1}>
                <div className="bg-dark rounded border border-dark">
                  <Modal.Body className="bg-dark rounded">
                    <Modal.Title className="text-light p-0">
                      Register
                    </Modal.Title>
                    <Form className="bg-dark text-light" style={{}}>
                      <Form
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          autoFocus
                        />
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          autoFocus
                        />
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          autoFocus
                        />
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Gender"
                          autoFocus
                        />
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          autoFocus
                        />
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Addres"
                          autoFocus
                        />
                      </Form>
                    </Form>
                    <Button
                      variant="light"
                      onClick={handleClose1}
                      className="m-0 mt-3 mb-3 text-danger fw-bolder"
                      style={{ width: "100%" }}
                    >
                      Register
                    </Button>
                  </Modal.Body>
                </div>
              </Modal>
            </div>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
      {/* <button onClick={() => setIsLogin(true)}></button> */}
    </div>
  );
};

function Root() {
  const [isLogin, setIsLogin] = useState(false);
  //   const [userStatus, setUserStatus] = useState("customer");

  if (isLogin) {
    return <PrivatePage setIsLogin={setIsLogin} />;
  } else {
    return <GuestPage setIsLogin={setIsLogin} />;
  }
}
export default Root;
