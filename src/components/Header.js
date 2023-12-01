import logo from '../img/logo.svg'

function Header() {
  return (
    <div className='header'>
      <div className='container header_container'>
        <img src={logo} alt="" className='logo' />
        <ul className='nav'>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">GALLERY</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <div className='btn_wrapper'>
          <button className='btn'>LOG IN</button>
          <button className='btn black'>SIGN UP</button>

        </div>
      </div>
    </div>
  )
}

export default Header;