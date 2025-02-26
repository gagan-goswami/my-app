// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../assets/images/flavor-image-1.png";
import Slider2 from "../../assets/images/flavor-image-2.png";
import Slider3 from "../../assets/images/flavor-image-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "react-bootstrap";

export default function SwiperComponent() {
  return (
    <section className="sugarrush-section">
      <Container>
        <div className="section-title">
          <h2>All the flavors of sugar rush</h2>
          <p>
            Porta non pulvinar neque laoreet suspendisse interdum consectetur
            libero. Massa tempor nec feugiat nisl. Accumsan lacus vel facilisis
            volutpat. Viverra justo nec.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto py-6">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
            onSlideChange={() => console.log("Slide changed")}
            className="w-full"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slider 1" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slider 2" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slider 3" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider1} alt="Slider 1" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slider 2" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slider 3" className="img-fluid" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
