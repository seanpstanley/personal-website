import React, { useState, /*useEffect*/ } from 'react';
/*import { Button } from './Button';*/
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    /*const [button, setButton] = useState(true);*/

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /*const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);*/

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                {/*<i class="fas fa-home"></i>*/}
                <img className='navbar-image' src='../../images/site_logo_50.png' alt='Site logo' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    home
                </Link>
                </li>
                <li className='nav-item'>
                <Link
                    to='/experience'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    work experience
                </Link>
                </li>
                <li className='nav-item'>
                <Link
                    to='/projects'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    projects
                </Link>
                </li>
                {/*}
                <li className='nav-item'>
                <Link
                    to='/about'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    about me
                </Link>
                </li>
                */}
            </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;