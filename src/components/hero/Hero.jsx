import React from 'react'
import "./Hero.scss"
import Nav from '../../layout/nav/Nav'
import HeroWomanImage from "../../assets/images/hero__woman.png"
import BgImg from "../../assets/images/hero.png"
import { FiSearch } from "react-icons/fi";
import { Container } from '../../utils/Utils';

const Hero = () => {
  return (
    <header>
        <Container>
        <div className="hero__wrapper">

        <div className="hero__content">
                  <h2>Find And Search Your <span> Suitable Doctor’s</span></h2>
                  <p>Join us and take care of yourself and your family with health services that will make you feel confident and safe in your daily life.</p>
          </div>

            <div className="hero-img__wrapper">
              <img src={BgImg} alt="" />
            </div>
        </div>
        </Container>
    </header>
  )
}

export default Hero