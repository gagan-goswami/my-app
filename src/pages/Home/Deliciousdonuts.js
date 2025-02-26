import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import donuts from "../../assets/images/donut-image.png";
import Dimage1 from "../../assets/images/d-image-1.png";
import Dimage2 from "../../assets/images/d-image-2.png";
import Dimage3 from "../../assets/images/d-image-3.png";
import Dimage4 from "../../assets/images/d-image-4.png";

function Deliciousdonuts() {
  return (
    <section className="deliciousdonuts-section">
      <Container>
        <div className="section-title">
          <h2>Delicious Donuts</h2>
          <p>
            Porta non pulvinar neque laoreet suspendisse interdum consectetur
            libero. Massa tempor nec feugiat nisl. Accumsan lacus vel facilisis
            volutpat. Viverra justo nec.
          </p>
        </div>
        <Row>
          <Col lg={6} className="mb-4">
            <div className="deliciousdonuts-img">
              <img src={donuts} alt="nuts" className="img-fluid" />
            </div>
          </Col>

          <Col lg={6} className="mb-4">
            <div className="donuts-content">
              <div class="donuts-inner d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={Dimage1} alt="cake-images" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Glazed Donut</h3>
                  <p>
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </p>
                </div>
              </div>
              <div class="donuts-inner d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={Dimage2} alt="cake-images" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Banana Donut</h3>
                  <p>
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </p>
                </div>
              </div>
              <div class="donuts-inner d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={Dimage3} alt="cake-images" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Cheese Donut</h3>
                  <p>
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </p>
                </div>
              </div>
              <div class="donuts-inner d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={Dimage4} alt="cake-images" className="img-fluid" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="mt-0">Batter Donut</h3>
                  <p>
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
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

export default Deliciousdonuts;
