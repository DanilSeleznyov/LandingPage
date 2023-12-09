import icons from '../img/icons.png'
import footerImg from '../img/image (18).png'


function Footer() {
  return (
    <div className='footer'>
        <div className="container footer_container">
            <div className="footer_main">
                <img src={footerImg} alt="" className='footer_img' />
                <div className="footer_nav">
                    <ul>
                        <h2>About</h2>
                        <li><a href='#'>Company</a></li>
                        <li><a href='#'>Teams</a></li>
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>Careers</a></li>
                    </ul>
                    <ul>
                        <h2>Resources</h2>
                        <li><a href='#'>Contact </a></li>
                        <li><a href='#'>Application </a></li>
                        <li><a href='#'>FQA Features</a></li>
                    </ul>
                    <ul>
                        <h2>Legals</h2>
                        <li><a href='#'>Copyright Privacy</a></li>
                        <li><a href='#'>Policy Disclaimer</a></li>
                        <li><a href='#'>Terms</a></li>
                        <img src={icons} alt="" />
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="footer_bottom">
                <p>© Copyright 2021. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer