import React from 'react'
import InfoItemList from './InfoItemList'
import productInfoImg from '../img/image (1).png'

function ProductInfo() {
    return (
        <div className='product_info_wrapper'>
            <div className='product_info_top'>
                <h2>Product Information</h2>
                <p>Our Scooter has following unique design and technology features:</p>
            </div>
            <div className='product_info_bottom'>
                <img src={productInfoImg} alt="" />
                <InfoItemList/>
            </div>

        </div>
    )
}

export default ProductInfo