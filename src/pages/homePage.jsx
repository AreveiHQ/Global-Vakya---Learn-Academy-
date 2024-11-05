import WhyChooseUs from '../components/homesections/chooseUs';
import ContactForm from '../components/contactUs';
import Footer from '../components/Footer';
import Training from '../components/homesections/Exam';
import NewCareers from '../components/homesections/newCareers';
import HomeDetails from '../components/homesections/welcomeSection';
import MainSection from '../components/homesections/MainheaderSecton';
import Navbar from '../components/navigation';
import Testimonials from '../components/homesections/testimonials';
import { Toaster } from 'react-hot-toast';
import React, {  useEffect, useState } from 'react'

function HomePage({openModal}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
    <Navbar isScrolled={isScrolled} openModal={openModal}/>
    <div className="overflow-x-hidden">
    <Toaster position='top-center' reverseOrder={false}/>
    <MainSection openModal={openModal}/>
    <div className=' bg-white relative -top-16  rounded-3xl md:rounded-[4rem] text-center text-black pt-10 flex flex-col justify-center items-center space-y-12 '>
    <HomeDetails openModal={openModal}/>
    <NewCareers/>
    <Training/>
    </div>
    <WhyChooseUs openModal={openModal}/>
    <Testimonials/>
    <div className=' bg-white relative -top-16  rounded-[4rem]  text-black pt-10 flex flex-col justify-center items-center space-y-20 '>
    <ContactForm/></div>
    <Footer/>
    </div>
    </>
  );
}

export default HomePage;