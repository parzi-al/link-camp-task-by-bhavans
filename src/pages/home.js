import React from 'react'
// import Headers from './../components/header'
import Even from './../assets/eventimg.svg'

import Nav from './../components/Navbar';
import Foot from './../components/footer';






const Home = () => { 
  
   return (
    <div className='  relative w-full h-full  bg-cover bg-norepeat 'style={{ backgroundImage:`url(${Even})` }}     >
<Nav/>
<div className='absolute w-full flex '>
<div className='absolute w-full  flex z-1 '>
<svg xmlns="http://www.w3.org/2000/svg" className=' ml-auto m-0'  width="890" height="876" viewBox="0 0 890 876" fill="text">
<path d="M434 0H1136.5L730.5 876H0L434 0Z" fill="#1D67B1"/>
</svg>
</div>

    <span className='text-4xl mx-20 z-10 ml-auto mt-80 font-[1000] items-center text-black '>

    Belong Where The <br/>Leaders Thrive
    </span>
</div>
{/* <Nav/> */}
     <div className='w-full '>

    <section className='  text-white flex pt-40  w-full relative ' >

  
    <div className='md:w-fit  flex flex-col    '>
    <div className=' flex flex-col m-10 gap-4 text-[#1D67B1] md:items-start items-center'>
    
    <span className='md:text-7xl z-20 text-left  font-[1000] text-5xl    '>
    Welcome 
    </span>
    <span className='md:text-7xl z-20   font-[1000] text-5xl    '>
    to 
    </span>
    <span className='md:text-7xl z-20 text-left  font-[1000] text-5xl    '>
    IEEE 
LINK
    </span>
    </div>
</div>

   </section>


    </div>
    <div className=' z-20   h-full relative md:mt-20  pt-[100px]  '>   

<Foot/>
 </div>
</div>


  )
}
export default Home;