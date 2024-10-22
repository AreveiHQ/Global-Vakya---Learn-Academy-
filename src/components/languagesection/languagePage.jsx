import React from 'react'
import styled from 'styled-components';
import { slideInRightVariants, textVariants } from '../ProviderFunctions';
import { motion } from 'framer-motion';
export default function LanguagePage({language,height}) {

  const DynamicHeightDiv = styled.div`
  position:absolute;
  background-color: transparent;
   height: ${(props) => `calc(${props.height}px + 77vh)` || '2300px'};
  right:0px;
  top:-6rem;
  z-index:30;
  max-width:32rem;
  width: 50%;
  @media (max-width: 768px) {
    height: auto;
    position:static;
    width: 100%;
  }
`;

  return (
    <div className=' min-h-[90vh] pt-6 md;pt-28 bg-[rgb(29,13,207)]  pb-36  font-Roboto  flex items-center ' >
        <div className='w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center my-12 gap-7 relative  '>
        <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
        <div className='  text-white w-full md:w-1/2 whitespace-break-spaces py-6 pr-0 md:pr-5 xl:pr-0'>
        <h1 className="text-[clamp(2rem,3vw,3rem)] font-bold mb-6 leading-8 md:leading-none  font-RobotoSlab">Learn <span className=' capitalize'>{language}</span> with <span className=' whitespace-nowrap text-[rgb(234,179,8)]'>L-Earn Academy</span></h1>
        <p className="mb-6">At L-Earn Academy, we believe that learning {language} opens doors to a rich cultural heritage and new opportunities. Our <span className=' capitalize'>{language}</span> courses are designed to help you improve your language skills quickly and effectively.</p>
        </div>
        </motion.div>
        <DynamicHeightDiv height={height}>


        <motion.form
        className="bg-white text-black mx-auto md:ml-auto p-8 rounded-lg shadow-lg sticky top-36 "
      initial="hidden"
      animate="visible"
      variants={slideInRightVariants}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]" />
          </div>
          <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
            <input type='text' id="language" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)] capitalize" value={language}>
            </input>
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="text" id="contact" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]" />
          </div>
          <div className='w-full flex justify-center items-center'>
          <button type="submit" className=" my-5 w-max bg-[rgb(234,179,8)] text-white px-3 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </motion.form>

      </DynamicHeightDiv>
    </div>
    </div>
  )
}
