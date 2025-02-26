import React from "react";
import Layout from "../../components/Layouts/Layout";
import Hero from "./Hero-Section";
import "../../styles/HomeStyle.css";
import "../../styles/MediaQuery.css";
import Cakes from "./Cakes";
import Product from "./Feature-product";
import AboutSection from "./AboutSection";
import Bestsale from "./Best-sale";
import Flavoursicecream from "./Flavours-icecream";
import Sugarrush from "./Sugarrush";
import Deliciousdonuts from "./Deliciousdonuts";
import Contactbanner from "./Contactbanner";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <Layout>
      {/* hero-section */}
      <Hero />
      {/* cake-sections */}
      <Cakes />
      {/* feature-product */}
      <Product />
      {/* About-section */}
      <AboutSection />
      {/* Best-sale-section */}
      <Bestsale />
      {/* Flavoursicecream-section */}
      <Flavoursicecream />
      {/* sugarrush-section */}
      <Sugarrush />
      {/* Deliciousdonuts-section*/}
      <Deliciousdonuts />
      {/* Contactbanner-section */}
      <Contactbanner />
      {/* testimonial-section */}
      <Testimonial />
    </Layout>
  );
}

export default Home;
