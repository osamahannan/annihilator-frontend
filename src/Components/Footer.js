import React from 'react'
import { Link } from "react-router-dom";
import logo from "../backgrounds/tab-logo.svg";
import { VscHome } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Footer = ({ setShowLink, showModal }) => {

    return (
        <div className={showModal ? "footer active-blur" : "footer"} >
            <div className="footer-container">
                <Fade left><div className="team11">
                    <Link to="/" className="annihilator2" onClick={setShowLink(1)}>
                        <img src={logo} alt="Annihilators" />
                        <h1>ANNIHILATORS</h1>
                    </Link>
                    <p>Since 2021, we have been offering cricket services of the highest quality, combining our energy and enthusiasm.</p>
                </div></Fade>
                <Fade up><div className="footer-contact">
                    <div className="footer-heading">
                        <h1 className="cont">CONT</h1>
                        <h1>ACT US</h1>
                    </div>
                    <div className="footer-icons">
                        <VscHome className="homeicon" />
                        <span>Roshan Nagar, New Haider Ganj, Lucknow, India, 226003</span>
                    </div>
                    <div className="footer-icons">
                        <a href="tel:8181007105" cm_dontconvertlink><BsTelephone className="footericon" /></a>
                        <a href="tel:8181007105" cm_dontconvertlink>8181007105</a>
                    </div>
                    <div className="footer-icons">
                        <HiOutlineMail className="footericon" />
                        <span>osamahannan7@gmail.com</span>
                    </div>
                </div></Fade>
                <Fade right><div className="copyright">
                    <span>Annihilators &copy;. All Right Reserved</span>
                    <span>Build with React Js</span>
                    <div className="social-container">
                        <a href="https://github.com/osamahannan" target="_blank" rel="noreferrer" className="social"><FaGithub /></a>
                        <a href="https://twitter.com/Osamahannan1" target="_blank" rel="noreferrer" className="social"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/osama-hannan-7337921a0/" target="_blank" rel="noreferrer" className="social"><FaLinkedin /></a>
                    </div>
                </div></Fade>
            </div>
        </div>
    )
}

export default Footer
