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
                  <h2>A community of mutual assistance between scientists from all over the world</h2>
                  <p>A convenient service that will select colleagues for you and help you establish mutually beneficial cooperation with them in the areas of joint research, co-authorship, reviewing and increasing the citation index.</p>
                  <button>Join</button>
          </div>

            <div className="hero-img__wrapper">
              <img src={BgImg} alt="Hero Banner" />
            </div>
        </div>
        </Container>
    </header>
  )
}

export default Hero