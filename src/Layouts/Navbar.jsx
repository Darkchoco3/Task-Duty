import React from "react";
import image from "../assets/Group 6.png";
import imgs from "../assets/Group 1.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link,useMatch } from "react-router-dom";

const NavBar = () => {
  const isAbout = useMatch('/Alltask');
  const isNew = useMatch('/Newtask');
  return (
    <>
    <div className="nav-wrapper border-bottom">
      <Navbar expand="lg" className="container mt-4">
        <Container fluid>
          <h2>
            {" "}
            <Link to="/" className="text-decoration-none text-dark">
              {" "}
              <img src={imgs} alt="na-logo" /> TaskDuty{" "}
            </Link>{" "}
          </h2>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <div className="d-flex align-items-center gap-5">
              {!isNew && "AllTask" && (
              <Link to="/NewTask" className="text-decoration-none text-dark">
                <h4> New Task </h4>
              </Link>
              )}

              {!isAbout && "/AllTask" && (
              <Link to="/AllTask" className="text-decoration-none text-dark">
                <h4> All Task </h4>
              </Link>
              )}
              <Link to="/">
                <img src={image} alt="" />
              </Link>
            </div>

            <Link className="text-decoration-none text-dark d-none d-lg-block"></Link>
            <>
              <section className="d-flex gap-5 align-items-center">
                <Link className="text-decoration-none text-dark d-none d-lg-block"></Link>
              </section>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </>
  );
};

export default NavBar;
