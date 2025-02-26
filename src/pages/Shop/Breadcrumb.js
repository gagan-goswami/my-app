import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/BreadcrumbStyle.css";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb() {
  return (
    // == breadcrumb-section-start == //
    <section className="breadcrumb-section">
      <Container>
        <div className="breadcrumb-box">
          <div className="breadcrumb-heading">
            <h2>Shop</h2>
          </div>
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li>Shop</li>
          </ul>
        </div>
      </Container>
    </section>
    // == breadcrumb-section ==
  );
}

export default Breadcrumb;
