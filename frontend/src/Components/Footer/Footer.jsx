import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_tbi.png'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="list">
                <div className="list-head">
                    <h2>Get In Touch</h2>
                    <div className="anim">
                        <div className="dot"></div>
                    </div>
                </div>
                    <ul>
                        <li><SlLocationPin /> MNNIT Allahabad, Prayagraj (UP),India</li>
                        <li><MdOutlineEmail /> iihmf2022@gmail.com</li>
                        <li><i class="fa-solid fa-phone"></i> 0532-4075285</li>
                    </ul>
            </div>
            <div className="list">
                <div className="list-head">
                    <h2>Quick Links</h2>
                    <div className="anim">
                        <div className="dot"></div>
                    </div>
                </div>
                    <ul>
                        <Link to='/'><li><FaArrowRightLong /> Home</li></Link>
                        <Link to='/aboutus'><li><FaArrowRightLong /> About Us</li></Link>
                        <Link to='contact-us'><li><FaArrowRightLong /> Contact Us</li></Link>
                    </ul>
            </div>
            <div className="list">
                <div className="list-head">
                    <h2>Downloads</h2>
                    <div className="anim">
                        <div className="dot"></div>
                    </div>
                </div>
                    <ul>
                        <li><FaArrowRightLong /> Brochure</li>
                    </ul>
            </div>
        </div>
        <div className='footer-divison'></div>
        <div className="footer-bottom">
            <div className="footer-logo">
                <img src={footer_logo} alt=''/>
            </div>
            <div className="footer-desc">
                <p>An innovation and incubation hub is a collaborative workspace that provides resources and support for entrepreneurs and startups to develop and commercialize new products or services.</p>
            </div>
            <div className="web-team-link">
                <Link to='/webteam'><FaArrowRightLong /> @Web-Team</Link>
            </div>
            <div className="footer-icons">
                <a href=''><i class="fa-brands fa-2x fa-instagram"></i></a>
                <a href='https://www.facebook.com/profile.php?id=61558843515602&mibextid=ZbWKwL' target='_blank'><i class="fa-brands fa-2x fa-facebook-f"></i></a>
                <a href='https://www.linkedin.com/company/innovation-and-incubation-hub-mnnit-foundation/' target='_blank'><i class="fa-brands fa-2x fa-linkedin-in"></i></a>
                <a href=''><i class="fa-brands fa-2x fa-twitter"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
