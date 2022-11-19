import React from 'react';
import logo from '../../../assets2/logo-4.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-20 bg-base-200 text-orange-900 text-1xl m-5">
  <div>
    <img src={logo} alt="img" />
    <p>Bachna Kubi.<br />All Right Reserved | 2022.</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a href='/'className="link link-hover">Branding</a> 
    <a href='/'className="link link-hover">Design</a> 
  </div> 
  <div>
    <span className="footer-title">Company</span>  
    <a href='/'className="link link-hover">Contact</a> 
    <a href='/'className="link link-hover">Jobs</a> 
    
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href='/'className="link link-hover">Terms of use</a> 
    <a href='/'className="link link-hover">Privacy policy</a> 
    <a href='/'className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;