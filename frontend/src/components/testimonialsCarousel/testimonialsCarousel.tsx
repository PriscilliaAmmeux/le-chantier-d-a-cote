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
import GoogleReview from "../googleReview/googleReview";

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
            <GoogleReview
              rating={
                [1, 2, 3, 4, 5].includes(t.rating)
                  ? (t.rating as 1 | 2 | 3 | 4 | 5)
                  : 5
              }
              text={t.text}
              author={t.author}
              date={t.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
