import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import icecream from "../../assets/images/ice-cream-image.png";
import icecream1 from "../../assets/images/ing-1.png";
import icecream2 from "../../assets/images/ing-2.png";
import icecream3 from "../../assets/images/ing-3.png";
import icecream4 from "../../assets/images/ing-4.png";
import icecream5 from "../../assets/images/ing-5.png";
import icecream6 from "../../assets/images/ing-6.png";

function Flavoursicecream() {
  return (
    <section className="flavoursicecream-section">
      <Container>
        <div className="section-title">
          <h2>Flavors of Ice Cream</h2>
          <p>
            Porta non pulvinar neque laoreet suspendisse interdum consectetur
            libero. Massa tempor nec feugiat nisl. Accumsan lacus vel facilisis
            volutpat. Viverra justo nec.
          </p>
        </div>
        <Row>
          <Col lg={4} md={6}>
            <div className="flavour-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={icecream1} alt="icecream" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Stracciatella </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and Testing
                    online
                  </p>
                </div>
              </div>
            </div>

            <div className="flavour-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={icecream2} alt="icecream" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Bastani Sonnati</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and Testing
                    online
                  </p>
                </div>
              </div>
            </div>

            <div className="flavour-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={icecream3} alt="icecream" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Blue moon</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and Testing
                    online
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="flavour-item">
              <img src={icecream} alt="icecream" className="img-fluid" />
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="flavour-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={icecream4} alt="icecream" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Raspberry Ripple</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and Testing
                    online
                  </p>
                </div>
              </div>
            </div>

            <div className="flavour-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={icecream5} alt="icecream" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Butter Brickle</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and Testing
                    online
                  </p>
                </div>
              </div>
            </div>

            <div className="flavour-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={icecream6} alt="icecream" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Rocky road</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and Testing
                    online
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Flavoursicecream;
