import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "../Blog/Breadcrumb";
import Blog1 from "../../assets/images/blog-1.png";
import Blog2 from "../../assets/images/blog-2.png";
import Blog3 from "../../assets/images/blog-3.png";
import Blog4 from "../../assets/images/blog-4.png";

const blogPosts = [
  {
    id: 1,
    image: Blog1,
    date: "24",
    month: "Jan",
    title: "The Art of Sweetness: A Journey into Dessert Making",
  },
  {
    id: 2,
    image: Blog2,
    date: "26",
    month: "fab",
    title: "From Donuts to Cheesecakes: Exploring Sweet Trends",
  },
  {
    id: 3,
    image: Blog3,
    date: "12",
    month: "Mar",
    title: "Top 10 Wardrobe Essentials for Every Woman",
  },
  {
    id: 4,
    image: Blog4,
    date: "24",
    month: "June",
    title: "Understanding Your Pet’s Needs: A Complete Guide",
  },
  {
    id: 5,
    image: Blog1,
    date: "18",
    month: "July",
    title: "Inside the Sweet Shop: A Day in the Life of a Dessert Maker",
  },
  {
    id: 6,
    image: Blog2,
    date: "24",
    month: "Aug",
    title: "The Sweet Science: How Desserts Bring Joy to Life",
  },
  {
    id: 7,
    image: Blog3,
    date: "27",
    month: "Sep",
    title: "How to Choose the Perfect Dessert for Any Occasion",
  },
  {
    id: 8,
    image: Blog4,
    date: "13",
    month: "Oct",
    title: "Cupcakes vs. Muffins: What’s the Real Difference?",
  },
];

function Blog() {
  return (
    <Layout>
      <Breadcrumb />
      <section className="blog-section">
        <Container>
          <div className="section-title">
            <h2>Our Latest Blog</h2>
          </div>
          <Row>
            {blogPosts.map((post) => (
              <Col key={post.id} lg={3} md={4} sm={6} className="mb-4">
                <div className="blog-post">
                  <div className="blog-thumb">
                    <img
                      src={post.image}
                      alt="blog-post"
                      className="img-fluid"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="post-date">
                      <span>{post.date}</span>
                      <span>{post.month}</span>
                    </div>
                    <h3>
                      <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                    </h3>
                    <div className="post-meta">
                      <Link to="/">
                        <i className="fa fa-user" /> Admin
                      </Link>
                      <Link to="/">
                        <i className="fa fa-comments" /> 03
                      </Link>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to={`/blog-details/${post.id}`} className="read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Blog;
