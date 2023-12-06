import React from 'react'
import Even from './../assets/eventimg.svg'
import New from './../assets/link.png'

import Nav from './../components/Navbar';
import Foot from './../components/footer';

import Buut from '../components/buut'
// import { Link } from 'react-router-dom'




const Event = () => { 
  
   return (
    <div className='  w-full' >

<Nav/>
     <div className='w-full bg-[#0c161a]    '  style={{ backgroundImage:`url(${Even})` }} >

    <section className='  text-white flex pt-40  w-full relative bg-cover '    >
<div className='flex md:flex-row flex-col '>
  
    <div className='md:w-1/2 relative m-10 flex flex-col    '>
    <div className=' flex flex-col md:items-start items-center'>
    
    <span className=' md:text-6xl md:font-[100] text-start text-xl '>
    </span>
   
    <span className=' md:text-8xl z-20 text-center  font-[1000] text-6xl '>
    Events Hosted
    </span>
  <a href='#ws' class="  z-20  md:mt-5 w-fit  ">
  
  </a>
    </div>
 

  
    </div>  

<div className=' relative md:w-1/2 h-full flex items-center   '>
</div>
</div>
   </section>
   <div className='flex justify-between   w-full   '>
    
     <div  className='w-1/2 relative flex items-center '>
     </div>

    </div>

    </div>
   <div className='w-full flex md:flex-row flex-col justify-between md:grid md:grid-cols-3   p-10 '>
   <div className=' p-10'>
     <Buut name='LINK CAMP 2023' 
    date='23rd December, 2023'
    description='It`s the time of the year to pass on the legacy and awaken the leader in you.
 '
Venue=' Lead College of Management, Palakkad'
link='#ws'
status='Open'
bg={New}
/>
    </div>
    <div className=' p-10'>
     <Buut name='LINK CAMP 2023' 
    date='23rd December, 2023'
    description='It`s the time of the year to pass on the legacy and awaken the leader in you.
 '
Venue=' Lead College of Management, Palakkad'
link='#ws'
status='Open'
bg={New}
/>
    </div><div className=' p-10'>
     <Buut name='LINK CAMP 2023' 
    date='23rd December, 2023'
    description='It`s the time of the year to pass on the legacy and awaken the leader in you.
 '
Venue=' Lead College of Management, Palakkad'
link='#ws'
status='Open'
bg={New}
/>
    </div><div className=' p-10'>
     <Buut name='LINK CAMP 2023' 
    date='23rd December, 2023'
    description='It`s the time of the year to pass on the legacy and awaken the leader in you.
 '
Venue=' Lead College of Management, Palakkad'
link='#ws'
status='Open'
bg={New}
/>
    </div><div className=' p-10'>
     <Buut name='LINK CAMP 2023' 
    date='23rd December, 2023'
    description='It`s the time of the year to pass on the legacy and awaken the leader in you.
 '
Venue=' Lead College of Management, Palakkad'
link='#ws'
status='Open'
bg={New}
/>
    </div><div className=' p-10'>
     <Buut name='LINK CAMP 2023' 
    date='23rd December, 2023'
    description='It`s the time of the year to pass on the legacy and awaken the leader in you.
 '
Venue=' Lead College of Management, Palakkad'
link='#ws'
status='Open'
bg={New}
/>
    </div>
 
     
   
   </div>
    <div className=' z-20   h-full relative md:mt-20  pt-[100px]  '>   

    <div className='  text-white'>
    <Foot/>
    </div>
     </div>
    </div>

  )
}
export default Event;