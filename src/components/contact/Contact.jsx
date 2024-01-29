import React from 'react'
import "./Contact.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import girl from "../../assets/images/girl.png"
import stars from "../../assets/images/stars.svg"
import alex from "../../assets/images/alex.png"
import zara from "../../assets/images/zara.png"
import { Container } from '../../utils/Utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Contact = () => {

  return (
    <div className='contact'>
      <Container>
        <div className="contact-wrapper">
          <Swiper
             autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={50}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}

            className="contact-swiper"
          >
            <SwiperSlide  className='contact-swiper-card'>
              <img src={girl} alt="" />
              <h5>Alan Zara dilan <img src={stars} alt="" /></h5>
              <span>New York, America, USA</span>
              <p>Telehealth is fueled by digital technologies and 
                DocTime telemedicine app has brought a great revolution in medical 
                services specially an overpopulated country where virtual 
                chamber can create at anywhere thoughout country</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'>
            <img src={alex} alt="" />
              <h5>Alex Maxwell <img src={stars} alt="" /></h5>
              <span>San Francisco, USA</span>
              <p>I visited my PCP for abdominal pain. My doctor told me that I 
                need to see Gastroenterologist. Earlier I used to call multiple 
                offices to schedule an appointment that suites my time.</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'>
            <img src={zara} alt="" />
              <h5>Dr. Tasnim zara <img src={stars} alt="" /></h5>
              <span>Los Angeles, USA</span>
              <p>HealthCare is enlightens my superpower each and every time...!
                I find DocTime a brand-able telemedicine platform with virtual waiting room, video 
                consultation, e-prescription, beautifully planned user interface.
                Thank you :)</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'>
            <img src={girl} alt="" />
              <h5>Alan Zara dilan <img src={stars} alt="" /></h5>
              <span>New York, America, USA</span>
              <p>Telehealth is fueled by digital technologies and 
                DocTime telemedicine app has brought a great revolution in medical 
                services specially an overpopulated country where virtual 
                chamber can create at anywhere thoughout country</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'>
            <img src={girl} alt="" />
              <h5>Alan Zara dilan <img src={stars} alt="" /></h5>
              <span>New York, America, USA</span>
              <p>Telehealth is fueled by digital technologies and 
                DocTime telemedicine app has brought a great revolution in medical 
                services specially an overpopulated country where virtual 
                chamber can create at anywhere thoughout country</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'>
            <img src={girl} alt="" />
              <h5>Alan Zara dilan <img src={stars} alt="" /></h5>
              <span>New York, America, USA</span>
              <p>Telehealth is fueled by digital technologies and 
                DocTime telemedicine app has brought a great revolution in medical 
                services specially an overpopulated country where virtual 
                chamber can create at anywhere thoughout country</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'>
            <img src={girl} alt="" />
              <h5>Alan Zara dilan <img src={stars} alt="" /></h5>
              <span>New York, America, USA</span>
              <p>Telehealth is fueled by digital technologies and 
                DocTime telemedicine app has brought a great revolution in medical 
                services specially an overpopulated country where virtual 
                chamber can create at anywhere thoughout country</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'>
            <img src={girl} alt="" />
              <h5>Alan Zara dilan <img src={stars} alt="" /></h5>
              <span>New York, America, USA</span>
              <p>Telehealth is fueled by digital technologies and 
                DocTime telemedicine app has brought a great revolution in medical 
                services specially an overpopulated country where virtual 
                chamber can create at anywhere thoughout country</p>
            </SwiperSlide>
            <SwiperSlide className='contact-swiper-card'><img src={girl} alt="" />
              <h5>Alan Zara dilan <img src={stars} alt="" /></h5>
              <span>New York, America, USA</span>
              <p>Telehealth is fueled by digital technologies and 
                DocTime telemedicine app has brought a great revolution in medical 
                services specially an overpopulated country where virtual 
                chamber can create at anywhere thoughout country</p></SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default Contact