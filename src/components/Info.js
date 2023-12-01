import React from 'react'
import InfoCard from './InfoCard';

function Info() {
const cardValues = [
    {
       number:105,
       units:'lbs',
       desc:'Net weight',
        
    },
    {
        number:26,
       units:'mph',
       desc:'Top Speed',

    },
    {
       number:38,
       units:'miles',
       desc:'Max Range',

    },
    {
       number:89,
       units:'nm',
       desc:'Max Torques',

    },
    {
       number:'22%',
       units:'slope',
       desc:'Hill Climbing',

    },
    {
       number:'2x',
       units:'',
       desc:'Hydralic Disc Brakes',

    },

]

  return (
    <div className='info_wrapper'>
        {cardValues.map((el, id) =>(
            <InfoCard key={id} {...el}/>
        ))}
        
    </div>
  )
}

export default Info;