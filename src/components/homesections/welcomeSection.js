import React from 'react'
import { staggerContainer, textVariants, useScrollAnimation } from '../ProviderFunctions'
import { motion } from 'framer-motion'
export default function HomeDetails({openModal}) {
  const controls = useScrollAnimation();
  
  return (
    <motion.div
  className="scroll-animated"
  initial="hidden"
  animate={controls}
  variants={staggerContainer}
>
      <section className="container px-4 font-Roboto" id='about' >
        <div className="w-full space-y-6  xl:w-[70%] mx-auto my-5">
          
        <motion.img variants={textVariants} src='/img/Website_Header_Image.avif'></motion.img>
        <motion.h1 variants={textVariants}><p className='  text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-RobotoSlab  '>Welcome to L-Earn Academy, Where Language Learning Meets Excellence!</p></motion.h1>
        <motion.div variants={textVariants}> <p className='text-xl  font-Roboto'>Whether it's English, Spanish, French, Dutch, German, Japanese, Chinese, Mandarin, or others goes beyond just grammar and vocabulary. It's about connecting with diverse cultures and building meaningful relationships.</p></motion.div>
        <motion.div variants={textVariants}> <p className='text-xl  font-Roboto'>Our mission is to provide high-quality language education that empowers students to communicate confidently and effectively in a globalised world. We foster a dynamic learning environment where students of all ages and backgrounds can thrive. Our passionate educators combine traditional and innovative teaching methods, prioritising student-centred learning and cultural immersion. We are committed to making language education accessible, engaging, and effective for everyone.</p></motion.div>
        <motion.div variants={textVariants}> <div className=" relative ">
        <p className='absolute left-[50%] -bottom-9 '><img src="svg/ApplyArrow.svg" alt="" /></p>
        <button className=' relative z-10 text-white  py-2.5 px-5 text-sm font-RobotoSlab hover: rounded-full whitespace-nowrap '  style={{backgroundColor:'rgba(29,13,207,1)'}} onClick={openModal} > Apply Now </button>
        </div> 
        </motion.div>
        </div>
      </section>
      </motion.div>
  )
}
