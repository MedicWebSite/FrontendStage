import React from 'react'
import Hero from '../../components/hero/Hero'
import Meeting from '../../components/meeting/Meeting'
import OurSerive from '../../components/our-service/OurSerive'
import Features from '../../components/features/Features'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <OurSerive/>
        <Meeting/>
    </div>
  )
}

export default Home