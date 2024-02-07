import "./OurService.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import Heart from "../../assets/images/heart.svg"
import Lung from "../../assets/images/lung.svg"
import Drug from "../../assets/images/drugg.svg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Container } from "../../utils/Utils";
import { Link } from "react-router-dom";
const OurSerive = () => {
  return (
    <div className="service">
      <Container>
        <div className="service-wrapper">
          <div className="service__title">
            <h2>Our Service</h2>
            <p>Our doctors have high qualified skills and are guaranteed to help you recover from your disease.</p>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={60}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="service-swiper"
          >
            <SwiperSlide className="service__swiper-card">
              <Link to="/category">
                <img src={Heart} />
                <h5>Cardiology</h5>
                <p>
                  Our cardiologists are skilled at  the diagnosing and treating diseases
                  of the cardiovascular system.
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="service__swiper-card">
              <img src={Lung} />
              <h5>Pulmonology</h5>
              <p>
                Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system.
              </p>
            </SwiperSlide>
            <SwiperSlide className="service__swiper-card">
              <img src={Drug} />
              <h5>Medicine</h5>
              <p>
                Our medcine doctor are skilled at  diagnosing treating diseases of the  latest medicne system.
              </p>
            </SwiperSlide>
            <SwiperSlide className="service__swiper-card">
              <img src={Drug} />
              <h5>Medicine</h5>
              <p>
                Our medcine doctor are skilled at  diagnosing treating diseases of the  latest medicne system.
              </p>
            </SwiperSlide>
            <SwiperSlide className="service__swiper-card">
              <img src={Drug} />
              <h5>Medicine</h5>
              <p>
                Our medcine doctor are skilled at  diagnosing treating diseases of the  latest medicne system.
              </p>
            </SwiperSlide>


          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default OurSerive