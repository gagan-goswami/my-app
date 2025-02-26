import React from "react";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <section className="Hero-Section">
      <Container>
        <div className="hero-content">
          <h1>flavors of joy fulness Unleashed.</h1>
          <p>
            Inspire your customers by illustrating a sophisticated lifestyle
            made possible through their purchases.
          </p>
          <button type="button" onClick="" className="hero-button">
            Shop Now <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
