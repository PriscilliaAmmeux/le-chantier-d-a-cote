import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import testimonials from "../../api/testimonials.json";
// @ts-expect-error: Ignore missing type declarations for Swiper CSS
import "swiper/css";
// @ts-expect-error: Ignore missing type declarations for Swiper CSS
import "swiper/css/pagination";
// @ts-expect-error: Ignore missing type declarations for Swiper CSS
import "swiper/css/navigation";
import "./TestimonialsCarousel.css";

export default function TestimonialsCarousel() {
  return (
    <section className="testimonials-carousel">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}>
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial">
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
