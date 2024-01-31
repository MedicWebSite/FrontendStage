import React from 'react'
import "./Hero.scss"
import Nav from '../../layout/nav/Nav'
import HeroWomanImage from "../../assets/images/hero__woman.png"
import BgImg from "../../assets/images/hero_woman_bg.svg"
import { FiSearch } from "react-icons/fi";
import { Container } from '../../utils/Utils';

const Hero = () => {
  return (
    <header>
        <Nav/>
        <Container>
        <div className="hero__wrapper">
                <div className="hero__content">
                  <h2>Find And Search Your <span> Suitable Doctor’s</span></h2>
                  <p>Join us and take care of yourself and your family with health services that will make you feel confident and safe in your daily life.</p>
                  <form className='hero__form'>
                    <input type="text" placeholder='Find your doctor' />
                    {/* <i className='location-icon'><HiOutlineLocationMarker/></i> */}
                    <select>
                      <option value="UZB">Uzbekistan, Toshkent</option>
                      <option value="USA">New York, USA </option>
                    </select>

                    <button><i><FiSearch/></i></button>
                  </form>
                </div>
                <div className="hero__image">
                    <img className='hero__bg-img' src={BgImg} alt="" />
                    <img className='hero__img' src={HeroWomanImage} />
                </div>
        </div>
        </Container>
    </header>
  )
}

export default Hero