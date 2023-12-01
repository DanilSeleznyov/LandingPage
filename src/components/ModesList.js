import React from 'react'
import InfoItem from './InfoItem'

function ModesList() {
    const modesTextValues = [
        'Material : Aluminium alloy', 'Color : Black', 'Capacity : 45lbs', 'Ease : Steady & adjustable',
    ]
    return (
        <div className='modes_list'>
            {modesTextValues.map((el, id)=>(
                <InfoItem key={id} textValue={el}/>
            ))}
        </div>
    )
}

export default ModesList