import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosStarOutline } from "react-icons/io";
import contactimage from "../../assets/images/contact-image.png";

function Contactbanner() {
  return (
    <section className="contactbanner-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="contact-item">
              <div className="contact-content">
                <h2>Made With Only The Good Stuff</h2>
                <p>
                  Porta non pulvinar neque laoreet suspendisse interdum
                  consectetur libero. Massa tempor nec feugiat nisl. Accumsan
                  lacus vel facilisis volutpat. Viverra justo nec.
                </p>
                <p>
                  You can have your ice cream and eat it, too! These delicious,
                  classic flavors are big in taste but lower in fat than regular
                  ice cream.
                </p>
                <ul>
                  <li>
                    <IoIosStarOutline /> Free and easy to get started
                  </li>
                  <li>
                    <IoIosStarOutline /> What you see is what you get
                  </li>
                  <li>
                    <IoIosStarOutline /> Experiment with trendy designs
                  </li>
                </ul>
                <div className="contact-btn">
                  <button type="button">Contact Us</button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="contact-item">
              <div className="contact-img">
                <img src={contactimage} alt="contact" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contactbanner;
