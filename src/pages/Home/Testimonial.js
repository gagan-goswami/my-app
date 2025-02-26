import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import { Pagination, Autoplay } from "swiper/modules"; // Import modules
import { Container } from "react-bootstrap";

// Testimonial data with Indian names and professions
const testimonials = [
  {
    name: "Priya Patel",
    profession: "Food Blogger",
    content:
      "I've tried many ice cream brands, but SugarRush stands out with its unique flavors and creamy texture.",
  },
  {
    name: "Arjun Singh",
    profession: "Event Planner",
    content:
      "SugarRush cakes are the highlight of every event I organize. Their designs and taste are top-notch!",
  },
  {
    name: "Ananya Reddy",
    profession: "Baker & Influencer",
    content:
      "As a baker myself, I appreciate the quality and creativity of SugarRush's products. Highly recommended!",
  },
  {
    name: "Vikram Mehta",
    profession: "CEO, FoodieTech",
    content:
      "SugarRush has redefined desserts for me. Their cakes and ice creams are a perfect blend of taste and innovation.",
  },
  {
    name: "Kavita Joshi",
    profession: "Homemaker",
    content:
      "My family loves SugarRush ice creams. They are our go-to treat for every celebration!",
  },
  {
    name: "Rohan Kapoor",
    profession: "Student",
    content:
      "SugarRush cakes are my favorite! They are not only delicious but also beautifully crafted.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="testimonial-section py-12 bg-gray-100">
      <Container>
        {/* Section Heading */}
        <div className="section-title ">
          <h2>Testimonials</h2>
          <p>
            Porta non pulvinar neque laoreet suspendisse interdum consectetur
            libero. Massa tempor nec feugiat nisl. Accumsan lacus vel facilisis
            volutpat. Viverra justo nec.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true} // Enables infinite looping
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-play every 3 seconds
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]} // Added Autoplay module
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>"{testimonial.content}"</p>

                <div className="mt-4">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.profession}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
