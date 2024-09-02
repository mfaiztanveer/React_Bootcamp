import React from 'react'
import FooterLogo from "../../assets/imgs/logo.png"
import "./Lowerfooter.css"
import facebook from "../../assets/imgs/facebook.png"
import X from "../../assets/imgs/twitter.png"
import LinkedIn from "../../assets/imgs/linkedIn.png"
import Insta from "../../assets/imgs/instagram.png"


export default function LowerFooter() {
  return (
    <div>
      <CompltFooter/>
    </div>
  )
}


function CompltFooter() {
    return (
        <div className='ft-main'>

            <div className="ft-div">

                <div className="Logo">
                    <img src={FooterLogo} alt="x" />
                    <div className='logo-text'>Insider's <span>Inventory</span></div>
                    <h3>Your Gateway to Real Estate Excellence</h3>
                </div>


                <div className="listAndSocials">
                    <List />

                    <div className="ft-socials">

                        <a href="https://www.facebook.com"><img src={facebook} alt="facebook" /></a>
                        <a href="https://www.X.com"><img src={X} alt="X" /></a>
                        <a href="https://www.linkedin.com"><img src={LinkedIn} alt="Linekdin" /></a>
                        <a href="https://www.Instagram.com"><img src={Insta} alt="Instagram" /></a>

                    </div>

                </div>

            </div>

            <div className="rights">
                <hr />
                <p>All right are reserved For insider's Inventory</p>
            </div>

        </div>
    )
}


 function List() {
    return (
      <div className="nb-list">
      <ul>
          <li>Home</li>
          <li>Buyers</li>
          <li>Sellers</li>
          <li>Buy & hold</li>
          <li>Retail</li>
          <li>Flip Opportunities</li>
          <li>Off-Market Inventory</li>
      </ul>
  </div>
  )
  }