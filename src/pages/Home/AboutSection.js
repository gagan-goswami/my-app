import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Aboutimage from "../../assets/images/about-image.png";

function Nuts() {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-img">
              <img src={Aboutimage} alt="nuts" className="img-fluid" />
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-content">
              <h2>Creamy Nuts Vanilla Cake</h2>
              <p>
                Bibendum enim facilisis gravida neque convallis a cras semper.
                Pretium fusce id velit ut tortor pretium viverra suspendisse. Ut
                diam quam nulla porttitor. Viverra ipsum nunc aliquet bibendum
                enim facilisis gravida neque convallis.
              </p>
              <div className="about-btn">
                <button type="button">About US</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Nuts;
