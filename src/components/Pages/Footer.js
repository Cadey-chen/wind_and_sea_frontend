import React from 'react'
import { Button } from '../Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <div className="input-areas">
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <ul>
                        <li>
                    <a href='./Concepts'>About this Site</a>
                    </li>
                    <li>
                    <a href='./Playground'> Join the discussion</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer