import { useState } from 'react';
import {useEffect} from 'react';
import Even from './../assets/eventimg.svg'
import New from './../assets/link.png'
import Nav from './../components/Navbar';
import Foot from './../components/footer';
import Buut from '../components/buut'
const Event = () => { 
  
  const [EventName, setEventName] = useState("");
  const [Venues, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [links, setLinks] = useState("");
  const [descriptions, setDes] = useState("");
  const [Img, setImg] = useState("");


useEffect(() => {
  const storedEventName = JSON.parse(localStorage.getItem('event'));
  if (storedEventName) {
    setEventName(storedEventName);
  }
}, []);


  const propertys  = [
   
    {
      names:EventName ,
      date:date,
      descriptions:descriptions,
      Venue:Venues,
      link:links,
      statuss:'Open',
      bg:New,
      },
      
   ];

   const handleClick= ()=>{
    localStorage.setItem("events",EventName)
    localStorage.setItem("vneu",Venues)
    localStorage.setItem("desc",descriptions)
    localStorage.setItem("dte",date)
    localStorage.setItem("link",links)
    localStorage.setItem("imgs",Img)
      console.log(EventName);
   }

   return (
    
    <div className=' bg-[#11221c]  w-full' >

<Nav/>
     <div className='w-full bg-[#0c161a] bg-cover'  style={{ backgroundImage:`url(${Even})` }} >

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
    
    <div className="flex flex-col items-center justify-center h-full w-full">
   
   <div className='w-full flex md:flex-row flex-col  justify-between md:grid md:grid-cols-3 gap-10  p-10 '>
   {
            propertys.map((person, index) => (
              <Buut
                key={index}
                bg={person.bg}
                descriptions={localStorage.getItem("desc")||person.descriptions}
                names={localStorage.getItem("events")||person.names}
                date={localStorage.getItem("dte")||person.date}
                Venue={localStorage.getItem("vneu")||person.Venue}
                statuss={person.statuss}
                link={person.link}
          />
            ))}
 
     
   
   </div>
    <div className="w-full max-w-md bg-white rounded-lg shadow-md    p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Event panel</h2>

      <form className="flex flex-col   "   
      onSubmit={(e) => {
        e.preventDefault();
          // propertys(EventName,Venues,date,links,descriptions);
      }}
      >  
    
        <input  type="text"
        id='EventName' 
        value={EventName} 
        onChange={(e) =>
         {
          setEventName(e.target.value);
        }} 
        className="  bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
        placeholder="Event Name"
        />
           
           <input type="text"  value={Venues} onChange={(e) => {
          setVenue(e.target.value);
        }}  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Venue"/>
        <input type="text"  value={date} onChange={(e) => {
          setDate(e.target.value);
        }}  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Date"/>
        <input type="text"  value={links} onChange={(e) => {
          setLinks(e.target.value);
        }}  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Link"/>
        <textarea name="description"  value={descriptions} onChange={(e) => {
          setDes(e.target.value);
        }}  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Description"></textarea>
        <input type="file"
          value={Img}
           onChange={(e) =>
           {
            setImg(e.target.value);
          }}
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
         placeholder="Poster"

         />
     
        <button type="submit" 
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        onClick={handleClick}
        >Apply</button>
      </form>
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