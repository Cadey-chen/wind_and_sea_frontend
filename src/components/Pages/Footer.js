import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <p><CopyrightIcon fontSize='4vw' /> 2023, Created by Cadey Chen</p>
                    <p>Get in touch: cadeychen7@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;