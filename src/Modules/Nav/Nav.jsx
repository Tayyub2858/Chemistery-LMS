import React, { useState }  from 'react'
import './NavStyle.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Front-page/logo.png';
function Nav() {
    const [isMenuClosed, setMenuClosed] = useState(true);
  return (
    <>
     <div className="nav-container" >
            <nav>
                <div className="nav-brand">
                  <img src={Logo} alt="companylogo" className='company-logo' />
                  <h2 className="logo-heading">CHEMISTER TIGHER</h2>
                </div>
                <div className="nav-links">
                    <Link to='/' title="Home" className="nav-btn">HOME</Link>
                    <Link title="About us" className="nav-btn">ABOUT US</Link>
                    <Link title="Courses" className="nav-btn">COURSES</Link>
                    <Link title="Nots" className="nav-btn">NOTS</Link>
                    <Link title="Test" className="nav-btn">TEST</Link>
                    <Link title="Notification" className="nav-btn">NOTIFICATION</Link>
                    <Link title="News" className="nav-btn">NEWS</Link>
                    <Link title="contact" to="/Contact" className="nav-btn">CONTACT</Link> 
                </div>
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                    <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                        <Link to='/' className="nav-btn">HOME</Link>
                        <Link className="nav-btn">ABOUT US</Link>
                        <Link className="nav-btn">COURSES</Link>
                        <Link className="nav-btn">NOTS</Link>
                        <Link className="nav-btn">TEST</Link>
                        <Link className="nav-btn">NOTIFICATION</Link>
                        <Link className="nav-btn">NEWS</Link>
                        <Link to='/Contact' className="nav-btn">CONTACT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav