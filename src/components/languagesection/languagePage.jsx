import React from 'react'
import styled from 'styled-components';
import { slideInRightVariants, textVariants } from '../ProviderFunctions';
import { motion } from 'framer-motion';
import ApplyForm from './applyForm';
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


        <motion.div
        className=" text-black mx-auto md:ml-auto  sticky top-36 "
      initial="hidden"
      animate="visible"
      variants={slideInRightVariants}>
          <ApplyForm language={language}/>
        </motion.div>

      </DynamicHeightDiv>
    </div>
    </div>
  )
}
