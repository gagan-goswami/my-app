import React from "react";
import Layout from "../../components/Layouts/Layout";
import Breadcrumb from "../Contact/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Layout>
      <Breadcrumb />
      <section className="contact-section">
        <Container>
          <div className="section-title">
            <h2>Have a Question? Contact Us!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquet in faucibus
              adipiscing id scelerisque gravida. Ultricies duis elit
              pellentesque rhoncus hac sed ipsum viverra vel.
            </p>
          </div>
          <Row>
            <Col lg={4} md={6}>
              <div className="contact-box">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mt-0">Contact Us</h5>
                    <Link to="/">Call us: +1834 123 456 789</Link>
                    <Link to="/">Email: support@example.com</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="contact-box">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <FaClock />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mt-0">Opening Hours</h5>
                    <p>
                      Mon - Sat: 7.00 am - 8.00 pm<br></br>
                      Sunday: 8.00 am - 6.00 pm
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="contact-box">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mt-0">Our Office</h5>
                    <p>
                      2972 Westheimer Rd. Santa<br></br>
                      Ana, Illinois, USA
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div class="google-map-container mt-80 mb-40">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49095.00043896973!2d-75.5692983769037!3d39.729821729303424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c70f185c46af6f%3A0x8516da5077308c00!2sWilmington%2C%20DE%2C%20USA!5e0!3m2!1sen!2s!4v1737227135771!5m2!1sen!2s"
            allowfullscreen=""
            height="500px"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
