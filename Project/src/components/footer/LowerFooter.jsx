import React from 'react';
import FooterLogo from "../../assets/imgs/logo.png";
import "./LowerFooter.css";
import facebook from "../../assets/imgs/facebook.png";
import twitter from "../../assets/imgs/twitter.png";
import linkedin from "../../assets/imgs/linkedIn.png";
import instagram from "../../assets/imgs/instagram.png";

export default function LowerFooter() {
  return (
    <footer className='ft-main'>
      <div className="ft-content">
        <div className="logo-section">
          <img src={FooterLogo} alt="Insider's Inventory Logo" className='footer-logo' />
          <div className='logo-text'>Insider's <span>Inventory</span></div>
          <h3>Your Gateway to Real Estate Excellence</h3>
        </div>
        <div className="list-and-socials">
          <List />
          <div className="social-icons">
            <a href="https://www.facebook.com" aria-label="Facebook" className="social-icon">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" className="social-icon">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="social-icon">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="social-icon">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="rights">
        <hr />
        <p>All rights are reserved for Insider's Inventory</p>
      </div>
    </footer>
  );
}

function List() {
  return (
    <div className="nav-list">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#buyers">Buyers</a></li>
        <li><a href="#sellers">Sellers</a></li>
        <li><a href="#buy-hold">Buy & Hold</a></li>
        <li><a href="#retail">Retail</a></li>
        <li><a href="#flip-opportunities">Flip Opportunities</a></li>
        <li><a href="#off-market">Off-Market Inventory</a></li>
      </ul>
    </div>
  );
}
