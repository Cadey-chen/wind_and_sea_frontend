import React from 'react'
import { Button } from '../Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email Address" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Get In Touch</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <ul>
                        <li>
                    <Link to='./Concepts'>About this Site </Link>
                    </li>
                    <li>
                    <Link to='./Playground'> Join the discussion</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer