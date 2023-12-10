import React from 'react'
// import Headers from './../components/header'
import Even from './../assets/rec.png'
import Even2 from './../assets/rec2.png'

import Nav from './../components/Navbar';
// import Foot from './../components/footer';






const Home = () => { 
  
   return (
    <div className='   relative w-full h-screen  '   >
<Nav/>
<div className='absolute w-full  flex '>
<div className='absolute w-full h-[733px] flex  '>
    <img src={Even} className='ml-auto  h-[879px]' alt='new' />

    {/* <img src={Even2} className=' h-[879px]' alt='new' /> */}
</div>

    <span className='text-6xl bg-[#1D67B1] mx-2 z-10 ml-auto mt-80 font-[1000] items-center text-white '>
    Belong Where The <br/>Leaders Thrive
    </span>
</div>

     <div className='w-full '>

    <section className='  text-white flex pt-40  w-full relative ' >

  
    <div className='md:w-fit  flex flex-col    '>
    <div className=' flex flex-col m-40 gap-4 text-[#1D67B1] md:items-start items-center'>
    
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
   <div className=' bg-white  w-full flex justify-center relative  '>
       
   
    <div className=' w-full mx-80 mt-32 w-1/2 md:h-fit h-1/2  flex bg-[#1D67B1]  md:flex md:flex-col p-7 md:z-40 hover:duration-500 hover:shadow-cyan-500/50 rounded-2xl bg-white  shadow-2xl m-10 '>
        <span className='md:text-9xl  flex text-white items-center  justify-center   font-[1000]'>
       Events
        </span>
       
        </div>
        </div>
</div>


  )
}
export default Home;