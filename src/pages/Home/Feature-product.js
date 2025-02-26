import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";

const Product = ({ title, price, image, rating, reviews, variants }) => {
  return (
    <section className="feature-product">
      <Container>
        <div className="section-title">
          <h2>Featured products</h2>
          <p>
            Porta non pulvinar neque laoreet suspendisse interdum consectetur
            libero. Massa tempor nec feugiat nisl. Accumsan lacus vel facilisis
            volutpat. Viverra justo nec.
          </p>
        </div>
        <Row>
          <Col lg={3} md={6}>
            <Card className="custom-card">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={image || product1}
                  alt="Product Image"
                />
              </div>
              <Card.Body>
                <Card.Title>{title || "Donuts"}</Card.Title>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < (rating || 3) ? (
                      <span key={i}>⭐</span>
                    ) : (
                      <span key={i}>☆</span>
                    )
                  )}
                  <span> ({reviews || 3})</span>
                </div>
                <div className="variants">
                  {(variants || []).map((variant, index) => (
                    <img
                      key={index}
                      src={variant}
                      alt="Variant"
                      className="variant-icon"
                    />
                  ))}
                </div>
                <div className="price-section">
                  <span className="price">${price || "40.00"}</span>
                  <FaShoppingBag className="cart-icon" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="custom-card">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={image || product2}
                  alt="Product Image"
                />
              </div>
              <Card.Body>
                <Card.Title>{title || "Brownies"}</Card.Title>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < (rating || 5) ? (
                      <span key={i}>⭐</span>
                    ) : (
                      <span key={i}>☆</span>
                    )
                  )}
                  <span> ({reviews || 5})</span>
                </div>
                <div className="variants">
                  {(variants || []).map((variant, index) => (
                    <img
                      key={index}
                      src={variant}
                      alt="Variant"
                      className="variant-icon"
                    />
                  ))}
                </div>
                <div className="price-section">
                  <span className="price">${price || "55.00"}</span>
                  <FaShoppingBag className="cart-icon" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="custom-card">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={image || product3}
                  alt="Product Image"
                />
              </div>
              <Card.Body>
                <Card.Title>{title || "Cupcakes"}</Card.Title>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < (rating || 3) ? (
                      <span key={i}>⭐</span>
                    ) : (
                      <span key={i}>☆</span>
                    )
                  )}
                  <span> ({reviews || 3})</span>
                </div>
                <div className="variants">
                  {(variants || []).map((variant, index) => (
                    <img
                      key={index}
                      src={variant}
                      alt="Variant"
                      className="variant-icon"
                    />
                  ))}
                </div>
                <div className="price-section">
                  <span className="price">${price || "52.00"}</span>
                  <FaShoppingBag className="cart-icon" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="custom-card">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={image || product4}
                  alt="Product Image"
                />
              </div>
              <Card.Body>
                <Card.Title>{title || "Macarons"}</Card.Title>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < (rating || 4) ? (
                      <span key={i}>⭐</span>
                    ) : (
                      <span key={i}>☆</span>
                    )
                  )}
                  <span> ({reviews || 4})</span>
                </div>
                <div className="variants">
                  {(variants || []).map((variant, index) => (
                    <img
                      key={index}
                      src={variant}
                      alt="Variant"
                      className="variant-icon"
                    />
                  ))}
                </div>
                <div className="price-section">
                  <span className="price">${price || "60.00"}</span>
                  <FaShoppingBag className="cart-icon" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button className="view-more">View All Products</Button>
        </div>
      </Container>
    </section>
  );
};

export default Product;
