import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cake1 from "../../assets/images/cake-1.png";
import cake2 from "../../assets/images/cake-2.png";
import cake3 from "../../assets/images/cake-3.png";
import cake4 from "../../assets/images/cake-4.png";

function Cakes() {
  return (
    <section className="cake-section">
      <Container>
        <div className="section-title">
          <h2>Unique & Hygienic Cakes</h2>
          <p>
            Porta non pulvinar neque laoreet suspendisse interdum consectetur
            libero. Massa tempor nec feugiat nisl. Accumsan lacus vel facilisis
            volutpat. Viverra justo nec.
          </p>
        </div>
        <Row>
          <Col lg={3} md={6}>
            <div className="cake-item">
              <div className="cake-img">
                <img src={cake1} alt="cake1" />
              </div>
              <div className="cake-content">
                <h3>Creamy Donuts</h3>
                <p>Odio morbi quis commodo odio aenean in iaculis nunc sed.</p>
                <button type="button">Shop Now</button>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="cake-item">
              <div className="cake-img">
                <img src={cake2} alt="cake2" />
              </div>
              <div className="cake-content">
                <h3>Designer Cakes</h3>
                <p>Odio morbi quis commodo odio aenean in iaculis nunc sed.</p>
                <button type="button">Shop Now</button>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="cake-item">
              <div className="cake-img">
                <img src={cake3} alt="cake3" />
              </div>
              <div className="cake-content">
                <h3>Flaky Pastries</h3>
                <p>Odio morbi quis commodo odio aenean in iaculis nunc sed.</p>
                <button type="button">Shop Now</button>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="cake-item">
              <div className="cake-img">
                <img src={cake4} alt="cake4" />
              </div>
              <div className="cake-content">
                <h3>Flavored Cupcakes</h3>
                <p>Odio morbi quis commodo odio aenean in iaculis nunc sed.</p>
                <button type="button">Shop Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cakes;
