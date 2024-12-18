import React from 'react'
import { FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className=' bg-black py-8  text-gray-500 font-Roboto '>
      <div className="w-[97%] sm:w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto flex flex-col md:flex-row gap-y-8">
      <div className=" w-min md:w-[60%] space-y-9 mx-auto">
      <div  onClick={()=>navigate('/')}>
              <img src="/GlobalVakyaWhite.png" className="h-24 " alt="" />
        </div>
        <ul className=' list-none flex gap-4 mx-auto'>
          <li><span className=' text-lg text-slate-400 whitespace-nowrap my-auto'>Follow Us On </span></li>
                <li className="text-gray-400 hover:text-yellow-200 cursor-pointer "><a  href="https://www.instagram.com/globalvakya/profilecard/?igsh=MWRhbm43OWNua3VlbQ%3D%3D"><FaInstagram fontSize={30}/></a></li>
        </ul>
      </div>
      <div className=" w-max md:w-[40%] flex flex-col gap-y-7 text-center mx-auto  md:flex-row justify-end py-5">
      <ul className=' list-none flex flex-col gap-4'>
                <li  className=' font-bold text-slate-400 text-lg'>Global Vakya Links</li>
                <li className=' cursor-pointer hover:text-yellow-500'><Link to="/">Home</Link></li>
                <li className=' cursor-pointer hover:text-yellow-500'><Link to="/about">About us page</Link></li>
                <li className=' cursor-pointer hover:text-yellow-500'><Link to="/ourPolicy">Privacy Policy </Link></li>
                <li className=' cursor-pointer hover:text-yellow-500'>T&C</li>
        </ul>
        </div>
      </div>
      <div className=" text-center text-sm">
        <p>All Rights Reserved Ⓡ Global Vakya.</p>
        <p>Maintained and Developed by <a className=' hover:underline hover:text-slate-200' href="https://www.arevei.com">www.arevei.com</a></p>
        </div>
    </footer>
  )
}
