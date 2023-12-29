import React from 'react'
import Hero from '../../components/hero/Hero'
import Meeting from '../../components/meeting/Meeting'
import OurSerive from '../../components/our-service/OurSerive'

const Home = () => {
  return (
    <div>
        <Hero/>
        <OurSerive/>
        <Meeting/>
    </div>
  )
}

export default Home