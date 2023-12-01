import React from 'react'
import image from '../img/image (2).png'

function Motor() {
  return (
    <div className='motor_wrapper'>
      <div className='container motor_container'>
        <div className='motor_top'>
          <h2>High Efficiency Motor</h2>
          <p>More torque for powerful riding with 22% maximum hill climbing capability.</p>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Motor