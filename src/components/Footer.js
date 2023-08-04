import React from "react";
import "./Footer.css";
import topHireLogoWhite from "../media/img/topHireLogoWhite.png";
import facebookLogo from "../media/img/facebook logo.png";
import twitterlogo from "../media/img/twitterLogo.png";
import instaLogo from "../media/img/instaLogo.png";
import linkedInlogo from "../media/img/linkedin Icon.png";
import codeCheflogo from '../asset/asset 11.png'
function Footer() {
  return (
    <div className="footerCont">
      <div className="footerMain">
        <div className="footerMainSection1">
          <img src={topHireLogoWhite} alt="" />
          <p>
            TopHire is on a mission to make it dead simple for leading Indian
            startups to hire the top 2% of tech talent.
          </p>
          <ul>
            <li>
              <img src={twitterlogo} alt="" />
            </li>
            <li>
              <img src={facebookLogo} alt="" />
            </li>
            <li>
              <img src={linkedInlogo} alt="" />
            </li>
            <li>
              <img src={instaLogo} alt="" />
            </li>
          </ul>
        </div>
        <div className="footerMainSectionSame">
          <h5>CANDIDATES</h5>
          <p>For Candidates</p>
          <p>Candidate Sign Up</p>
          <p>Invite & Earn ₹15k</p>
          <p>Candidate FAQ</p>
        </div>
        <div className="footerMainSectionSame">
            <h5>EMPLOYERS</h5>
            <p>For Employers</p>
            <p>Employer Sign Up</p>   
            <p>Employer FAQ</p> 
        </div>
        <div className="footerMainSectionSame">
            <h5>COMPANY</h5>
            <p>Careers</p>
            <p>Privacy Policy</p>
        </div>
        <div className="footerMainSectionSame">
            <h5>PARTNERS</h5>
            <img src={codeCheflogo} alt="" />
        </div>
      </div>
      <p className="siteRights">© 2023 SPSG TopHire. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
