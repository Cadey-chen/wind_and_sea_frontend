import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import './Navbar.css';
import { Button } from './Button';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../images/logo512.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Concepts' className='nav-links' onClick={closeMenu}>
                        Concepts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Timeline' className='nav-links' onClick={closeMenu}>
                        Timeline
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Explore' className='nav-links' onClick={closeMenu}>
                        Explore
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Playground' className='nav-links' onClick={closeMenu}>
                        Playground
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar