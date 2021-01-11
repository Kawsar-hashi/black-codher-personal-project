import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 950) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
        <div className="navbar-container">
           <Link to="/" className="navbar-logo">
           SETLE <i className="fab fa-galactic-senate" />
           </Link>
           <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
    <ul className= {click ? 'nav-menu active' : 'nav-menu' }>
        <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                Quiz
            </Link>    
        </li>
        <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                Games
            </Link>            
        </li>
        <li className='nav-item'>
            <Link to ='/About' className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>            
        </li>
        <li className='nav-item'>
            <Link to ='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu}>
                SignUp
            </Link>
            
        </li>
    </ul>
    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>

        </nav>
        </>

    )
}

export default NavBar;