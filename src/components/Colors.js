import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'

function Colors() {
    const images = [img1, img2, img3, img4,]
    return (
        <div className='colors'>
            <div className='container colors_container'>
                <div className='colors_top'>
                    <h2>Colors</h2>
                    <p>Checkout our products colors.</p>
                </div>
                <div className='colors_main'>
                    <div className='img_list'>
                        {images.map((el, id) => (
                            <img src={el} key={id} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colors