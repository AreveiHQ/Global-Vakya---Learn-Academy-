import React from 'react'
import { motion } from "framer-motion";
import { textVariants } from '../ProviderFunctions';
export default function AboutHeroSection() {
  
  return (
    <div className='  flex  items-center pb-16 bg-[rgb(29,13,207)]' >
      <div className=" pl-16 py-8 text-6xl sm:text-[clamp(3rem,4vw,5rem)] font-extrabold   font-Inter  text-white relative ">
        <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
        <div className=' relative flex flex-col z-0 leading-[4rem] md:leading-[5rem] xl:leading-[7rem]'>
      <span>About Us</span>
        </div>
        </motion.div>
      </div>
    </div>
  )
}
