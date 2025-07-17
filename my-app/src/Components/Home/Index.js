import CarServices from '@/Cards/CarService'
import React from 'react'
import HeroSection from './HeroSection'
import WhatWeDo from './Whatwedo'
import AboutUsSection from './AboutUs'
import Counter from './Counter'
import ProjectSlider from './ProjectSlider'
import SmilesAndSubscribe from './SmilesAndSubscribe'
import InvestmentPlans from './InvestmentPlans'
import AppointmentSection from './AppointmentSection'

function Home() {
  return (
    <>
        <HeroSection />
        <CarServices />
        <AboutUsSection />
        <Counter />      
        <ProjectSlider />
        <WhatWeDo />  
        <SmilesAndSubscribe />
        <InvestmentPlans />
        <AppointmentSection />
    </>
  )
}

export default Home