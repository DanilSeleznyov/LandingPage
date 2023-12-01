import React from 'react'
import ModesList from './ModesList'
import img from '../img/image (3).png'
import img2 from '../img/image (4).png'
import img3 from '../img/image (5).png'
import img4 from '../img/image (6).png'
import ModesBottomList from './ModesBottomList'


function Modes() {
    return (
        <div className='modes'>
            <div className='container modes_container'>
                <div className='modes_top'>
                    <h2>Multiple Accessories</h2>
                    <p>There are multiple modes for the scooter for your multiple needs.</p>
                </div>
                <div className='modes_main'>
                    <div className='modes_text'>
                        <h2>Golf Bag Rock</h2>
                        <ModesList />
                    </div>
                    <img src={img} alt=""/>
                    <img src={img2} alt="" />
                </div>
                <div className='modes_bottom'>
                    <div>
                        <img src={img3} alt="" className='modes_bottom_img'/>
                        <img src={img4} alt="" className='modes_bottom_img2'/>
                    </div>
                    <div className='modes_bottom_text'>
                        <h2>Shopping Rack</h2>
                        <ModesBottomList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modes