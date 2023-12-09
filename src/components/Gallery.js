import img0 from '../img/image (7).png'
import img1 from '../img/image (8).png'
import img2 from '../img/image (9).png'
import BtnWrapper from './BtnWrapper'

function Gallery() {
    return (
        <div className="gallery">
            <div className="container gallery_container">
                <div className='gallery_top'>
                    <h2>Gallery</h2>
                    <p>View gallery of our products and make yourself satisfied with our creation.</p>
                </div>
                <div className="gallery_main">
                    <div className="gallery_left">
                        <img src={img2} alt="" />
                        <BtnWrapper/>
                    </div>
                    <div className="gallery_right">
                        <img src={img1} alt="" />
                        <img src={img0} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gallery