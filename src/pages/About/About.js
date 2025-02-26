import React from "react";
import Breadcrumb from "./Breadcrumb";
import Layout from "../../components/Layouts/Layout";
import AboutSection from "../Home/AboutSection";
import Flavoursicecream from "../Home/Flavours-icecream";
import TestimonialSlider from "../Home/Testimonial";
function Aboutpage() {
  return (
    <Layout>
      <Breadcrumb />
      <AboutSection />
      <Flavoursicecream />
      <TestimonialSlider />
    </Layout>
  );
}

export default Aboutpage;
