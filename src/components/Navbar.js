import React from "react";
import "../index.css";

import { FiInstagram } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <span className="navbar__left--name">I'm Sofia Franco.</span>
        <p>
          A <span className="navbar__left--position">Digital Activist,</span>
          Writer and Consultant
        </p>
      </div>
      <div className="navbar__right">
        <div className="navbar__right--menu">
          <span>
            ME <br />
            NU
          </span>
        </div>
        <ul className="navbar__links">
          <li className="links__items">Home</li>
          <li className="links__items">CV</li>
          <li className="links__items">Blog</li>
          <li className="links__items">Contact</li>
        </ul>
        <ul className="navbar__social">
          <li className="links__items">
            <CgProfile className="icon" />
            <span>Log In</span>
          </li>
          <li className="links__items">
            <TiSocialFacebook />
          </li>
          <li className="links__items">
            <TiSocialTwitter />
          </li>
          <li className="links__items">
            <TiSocialLinkedin />
          </li>
          <li className="links__items">
            <FiInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
