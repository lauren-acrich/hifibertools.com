import React from 'react';
import HiFiberLogo from '../images/logoTransparent.png';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
        <img
          style={{
            display: 'block',
            alignSelf: 'center',
            height: 120,
            padding: 30
          }}
          src={HiFiberLogo} alt="logo" />
        </div>
        <p>Open Source dev tool to visualize the architecture of your React code</p>
        <div>
        <GoMarkGithub style={{paddingRight: 10}}/> 
          <a
            className="githubLink"
            href="https://github.com/oslabs-beta/HiFiber"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="githubBtn">Github</button>
        </a>
        </div>
        <div>
        <BsLinkedin style={{
          paddingRight: 10,
          paddingLeft: 20
        }} />
          <a
            className="linkedInLink"
            href="https://www.linkedin.com/company/hifibertools/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="linkedInBtn">LinkedIn</button>
        </a>
        </div>
    </div>
  )
}

export default Header;