import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import './Navbar.css';
import { Button } from './Button';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../images/logo512.png';

function Navbar() {

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Concepts' className='nav-links'>
                        Concepts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Timeline' className='nav-links'>
                        Timeline
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Explore' className='nav-links'>
                        Explore
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Playground' className='nav-links'>
                        Playground
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar;

/*
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
    */