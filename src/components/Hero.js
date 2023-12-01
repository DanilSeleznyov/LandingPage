import img from '../img/image.png'
import play from '../img/play button.svg'
import Info from './Info'


function Hero() {
    return (
        <div className='hero'>
            <div className='container hero_container'>
                <div className='text'>
                    <h2>Let's ride <span className='text_strong'>the future</span>.</h2>
                    <div className='underline'></div>
                    <p className='desc'>Simple and sleek design with users in mind.</p>
                    <div className='text_bottom'>
                        <div className='text_bottom_left'>
                            <button>
                                →
                            </button>
                            <p>Buy now</p>
                        </div>
                        <div className='text_bottom_right'>
                            <p>Watch our video how it works</p>
                            <img src={play} alt="" />
                        </div>
                    </div>
                </div>
                <img src={img} alt="" className='hero_img' />
            </div>
            <div className='container'>
                <Info/>
            </div>
        </div>
    )
}

export default Hero;
