import React from 'react'
import InfoItemIcon from '../img/Icon.svg'

function InfoItem({textValue}) {
  return (
    <div className='product_info_item'>
        <img src={InfoItemIcon} alt="" />
        <p>{textValue}</p>
    </div>
  )
}

export default InfoItem