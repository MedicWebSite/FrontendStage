import React from 'react'
import Hero from '../../components/hero/Hero'
import Meeting from '../../components/meeting/Meeting'
import OurSerive from '../../components/our-service/OurSerive'
import Features from '../../components/features/Features'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <OurSerive/>
        <Meeting/>
        <Contact/>
        <About/>
    </div>
  )
}

export default Home