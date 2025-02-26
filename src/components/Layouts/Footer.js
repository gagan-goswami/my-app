import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import {
  FaXTwitter,
  FaCcVisa,
  FaCcDiscover,
  FaCcMastercard,
} from "react-icons/fa6";
import { Link } from "react-router";
import "../../styles/FooterStyle.css";

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="footer-item">
              <div className="footer-logo">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <div className="footer-item">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Shop">Shop</a>
                </li>
                <li>
                  <a href="/Blog">Blog</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <div className="footer-item">
              <h4>Service Links</h4>
              <ul>
                <li>
                  <a href="/"> Shop</a>
                </li>
                <li>
                  <a href="/about">Sign in</a>
                </li>
                <li>
                  <a href="/about">View Cart</a>
                </li>
                <li>
                  <a href="/products">My Wishlist</a>
                </li>
                <li>
                  <a href="/contact">Track My Order</a>
                </li>
                <li>
                  <a href="/contact">Help</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="footer-item">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="/">
                    <span>Email:</span> sugarrush@domain.com
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <span> Phone:</span> (+68) 123 456 7890
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <span>Address:</span> 502 New Design Str, Melbourne
                  </a>
                </li>
              </ul>
              <ul className="social-icons">
                <li>
                  <a href="/">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="copy-right">
          <div className="copy-right-content">
            <p>
              &copy; {new Date().getFullYear()} Sugar Rush. All rights reserved.
            </p>
          </div>
          <div className="payment-methods">
            <ul>
              <li>
                <Link href="/">
                  <FaCcVisa />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaCcDiscover />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaCcMastercard />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
