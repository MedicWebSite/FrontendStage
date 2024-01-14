import React from 'react'
import Hero from '../../components/hero/Hero'
import Meeting from '../../components/meeting/Meeting'
import OurSerive from '../../components/our-service/OurSerive'
import Features from '../../components/features/Features'
import About from '../../components/about/About'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <OurSerive/>
        <Meeting/>
        <About/>
    </div>
  )
}

export default Home