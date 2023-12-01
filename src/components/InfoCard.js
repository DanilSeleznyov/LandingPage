import React from 'react'

function InfoCard({number, units, desc}) {
  return (
    <div className='info_item'>
        <h2>{number} <span>{units}</span></h2>
        <p>{desc}</p>
    </div>
  )
}

export default InfoCard