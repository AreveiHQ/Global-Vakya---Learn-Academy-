import React from 'react'
import AboutHeroSection from '../components/AboutUs/Aboutherosection'
import Navbar from '../components/navigation'
import AboutUsContent from '../components/AboutUs/AboutContent'
import Footer from '../components/Footer'

export default function AboutUs({openModal}) {
  return (
    <>
    <Navbar openModal={openModal}/>
    <AboutHeroSection/>
    <div className=' bg-white relative -top-16  rounded-3xl md:rounded-[4rem]  text-black pt-10 flex flex-col justify-center items-center space-y-12 '>
        <AboutUsContent/>
    </div>
    <Footer/>
    </>
  )
}
