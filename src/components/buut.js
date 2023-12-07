import React from 'react'

import './buu.css'
function Buu(props) {
  return<div class="card"  >
  <div class="content">
    <div class="back">
      <div class="back-content bg-cover"style={{ backgroundImage:`url(${props.bg})` }}  >
        
        <strong>{props.names}</strong>
      </div>
    </div>
    <div class="front  bg-cover" style={{ backgroundImage:`url(${props.bg})` }}>
      
      <div class="img">
        <div class="circle">
        </div>
        <div class="circle" id="right">
        </div>
        <div class="circle" id="bottom">
        </div>
      </div>

      <div class="front-content">
        <small class="badge">{props.statuss} </small>
        <div class="description">
          <div class="title">
            <p class="title">
              <strong className='item-center text-2sm font-[1000]'>{props.names} </strong>
            </p>
           
          </div>
          <p class="card-footer" className='text-sm  text-red-100 font-[500]'>
          {props.descriptions}
          </p><div className='text-red-100 text-sm '>
             
          venue:{props.Venue}
          
          </div>
          <a href={props.link} className=''>
          <button class="relative px-8 py-2 rounded-full bg-sky-500  isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full    before:bg-sky-100 
         text-black before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">register</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>;
}

export default Buu;