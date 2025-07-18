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
import TeamMemberSlider from './TeamMemberSlider'
import FAQSection from './FAQSection'
import TestimonialSlider from './TestimonialSlider'
import BlogCards from '@/Cards/BlogCards'

function Home() {
  return (
    <>
        <HeroSection />
        <CarServices />
        <AboutUsSection />
        <ProjectSlider />
        <WhatWeDo />  
        <SmilesAndSubscribe />
        <InvestmentPlans />
        <AppointmentSection />
        <TeamMemberSlider/>
        <TestimonialSlider />
        <FAQSection />
        <BlogCards />
    </>
  )
}

export default Home