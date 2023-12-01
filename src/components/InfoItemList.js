import React from 'react'
import InfoItem from './InfoItem'

function InfoItemList() {
    const textValues = [
        'Lightweight aircraft grade aluminium frame',
        'Car grade lithium battery',
        'Self-balanced',
        'Plug n play',
        'Quick release adapter',
        'RFID key card',
    ]

  return (
    <div className='info_item_list'>
        {textValues.map((el, id) =>(
            <InfoItem key={id} textValue={el}/>
        ))}
        
    </div>
  )
}

export default InfoItemList