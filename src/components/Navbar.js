import React from 'react'
import Navo from './Navo'
import Jaba from './../assets/ieee-logo.png'
import { Link } from 'react-router-dom'
import Headers from './header'
import { Outlet } from 'react-router-dom'
 const Navbar = () => {
  return (
    <div className="w-full   relative   z-50 ">
    <Headers/>
    <div className="  w-full flex bg-[#1d67b1] justify-between  absolute  duration-500 hover:shadow-white/25 absolute h-fit shadow-2xl p-2  fixed  z-50 ">
        <img className=' ' src={Jaba} alt='jaba'/>
        <div className='flex  w-2/6  justify-between '>
        <Link to="/" className='  duration-500 hover:underline text-white'>Home</Link>
        <Link to="/event" className='  duration-500 hover:underline text-white'>Events</Link>
        <a href='#ws' className='  duration-500 hover:underline text-white'>Ieee.org</a>
        </div>
          <Navo/>
        </div> 
        <Outlet/>
  </div> 
  )
}
export default Navbar;