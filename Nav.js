import React ,{usesState} from 'react'
import logo from '../images/Logo .svg'
export default function Nav() {
  const [menuOpen ,setMenuOpen]=useState(false);
  const toggleMenu =()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className={`Navbar ${menuOpen ? "open":""}`}>
      <a href="/" className='logo'>
        <img src={logo} alt="" />
      </a>
      {/* {mobile Navbar} */}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className="bar">Home</div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nab-links ${menuOpen ?'visible':''}`}>
        <li>
            <a href="/">Home</a>
        </li>
        <li><a href=""></a>About</li>kl
        <li><a href=""></a>Services</li>
        <li><a href=""></a>Menu</li>
        <li><a href=""></a>Reservations</li>
        <li><a href=""></a>Order Online</li>
      </ul>
    </nav>
  )
}
