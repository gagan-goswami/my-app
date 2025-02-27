import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  useEffect(() => {
    const handleScroll = () => {
      const stickyClass = "is-sticky-menu";
      const scrollTop = window.scrollY;
      const stickyElement = document.querySelector(".is-sticky-on");

      if (scrollTop >= 250) {
        stickyElement.classList.add(stickyClass);
      } else {
        stickyElement.classList.remove(stickyClass);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-section">
      <div className="menu-bar is-sticky-on">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              className="ms-auto d-lg-none"
              type="button"
              aria-controls="offcanvasNavbar"
              onClick={handleShowOffcanvas}
            >
              <FaBars />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-menu">
                <Nav className="m-auto p-0">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" className="active">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/About">
                      About
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Shop">
                      Shop
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Blog">
                      Blog
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Contact">
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="contact-btn">
              <Link to="/Contact">Contact</Link>
            </div>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
