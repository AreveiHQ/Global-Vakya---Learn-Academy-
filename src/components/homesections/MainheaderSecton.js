import React from 'react'
import { motion } from "framer-motion";
import { textVariants } from '../ProviderFunctions';
export default function MainSection({openModal}) {
  
  return (
    <div className=' flex flex-col-reverse sm:flex-row min-h-[90vh] items-center justify-center pb-28  px-10 pt-8' >

        <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="  font-bold  font-RobotoSlab  text-black  text-center sm:text-left"
    >
        
        <div className=' relative text-4xl sm:text-[clamp(3rem,6vw,7rem)] sm:leading-[3rem] md:leading-[4rem]  lg:leading-[5rem] xl:leading-[6rem] flex flex-col z-0 '>

       <motion.h1
        style={{ display: "inline-block", margin: "0 5px" }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      ><span className=' whitespace-normal sm:whitespace-nowrap font-Lobster'>Global Language,</span></motion.h1>
       <motion.h1
        style={{ display: "inline-block", margin: "0 5px" }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      ><span className='font-Lobster'>Local Expertise</span></motion.h1>
        <motion.div
         style={{ display: "inline-block", margin: "0 5px" }}
         initial={{ scale: 0.8 }}
         animate={{ scale: 1 }}
         transition={{ duration: 0.5, delay: 0.7 }}
         className="text-base text-gray-700 pt-5 pb-10 sm:pb-14 md:pb-20"
      ><span className=' text-xl '>🎉 New Language Batch Starting Soon! Limited Seats Available 🌍📚</span></motion.div>
        </div>
        <motion.div
         style={{ display: "inline-block", margin: "0 5px" }}
         initial={{ scale: 0.8 }}
         animate={{ scale: 1 }}
         transition={{ duration: 0.5, delay: 0.9 }}
         className="text-base text-gray-700 mb-6"
      >
        <button className="px-6 py-3 bg-[rgb(29,13,207)] text-white rounded-md text-lg font-semibold hover:bg-blue-700 active:translate-x-0.5 active:translate-y-0.5" onClick={openModal}>
          Enroll Now
        </button>
        {/* <p className="mt-2 text-red-600 font-semibold">Limited Seats Available!!</p> */}
      </motion.div>
        </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="mt-10"
      >
        <img src="/img/globe.png" className='h-60 sm:h-auto max-h-[29rem]' alt="" />
      </motion.div>
    </div>
  )
}
