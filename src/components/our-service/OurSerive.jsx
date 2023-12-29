import "./OurService.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const OurSerive = () => {
  return (
    <div className="service-wrapper">
        <div className="service__title">
          <h2>Our Service</h2>
          <p>Our doctors have high qualified skills and are guaranteed to help you recover from your disease.</p>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="service-swiper"
      >
        <SwiperSlide className="service__swiper-card">Slide 1</SwiperSlide>
        <SwiperSlide className="service__swiper-card">Slide 2</SwiperSlide>
        <SwiperSlide className="service__swiper-card">Slide 3</SwiperSlide>
   
      </Swiper>
    </div>
  )
}

export default OurSerive