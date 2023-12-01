import React from 'react'
import InfoItem from './InfoItem'

function ModesBottomList() {
    const modesTextValues2 = [
        'Material : Aluminium alloy', 'Color : Black', 'Capacity : 45lbs', 'Ease : Quick & adjustable',
    ]
  return (
    <div className='modes_list_bottom'>
       {modesTextValues2.map((el, id) =>(
        <InfoItem key={id} textValue={el}/>
       )) }
    </div>
  )
}

export default ModesBottomList