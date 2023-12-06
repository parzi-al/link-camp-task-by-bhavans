import React from 'react'

import './buu.css'
function Buu(props) {
  return<div class="card">
  <div class="content">
    <div class="back">
      <div class="back-content">
        
        <strong>{props.name}</strong>
      </div>
    </div>
    <div class="front">
      
      <div class="img">
        <div class="circle">
        </div>
        <div class="circle" id="right">
        </div>
        <div class="circle" id="bottom">
        </div>
      </div>

      <div class="front-content">
        <small class="badge">Open </small>
        <div class="description">
          <div class="title">
            <p class="title">
              <strong>Eventia </strong>
            </p>
           
          </div>
          <p class="card-footer">
          Join us for an enchanting evening at the "Enchanted Garden Gala," a magical event where dreams come to life. Immerse yourself in a world of whimsy and wonder as we transform a secret garden into a realm of beauty and mystery.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>;
}

export default Buu;