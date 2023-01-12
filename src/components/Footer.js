import React from "react";
import logo from "../images/logo.png";
import playStore from "../images/Google play button.svg";
import fb from "../images/facebook blue.png";
import twitter from "../images/twitter blue.png";
import ig from "../images/ig blue.png";

import "./footer.css";

const Footer = ({ bgcolor, linksColor }) => {
  return (
    <footer style={{ backgroundColor: `${bgcolor}` }}>
      <div className="footer-details">
        <div className="footer-links">
          <img src={logo} alt="logo" srcset="" />
          {/* ----- */}
          <div>
            <div>
              <ul>
                <li>
                  <a href="/" style={{ color: `${linksColor}` }}>
                    About Us
                  </a>{" "}
                </li>

                <li>
                  <a href="/" style={{ color: `${linksColor}` }}>
                    Contact Us
                  </a>{" "}
                </li>

                <li>
                  <a href="/" style={{ color: `${linksColor}` }}>
                    FAQ's
                  </a>{" "}
                </li>
              </ul>
            </div>
            {/* ------ */}
            <div>
              <ul>
                <li>
                  <a href="/" style={{ color: `${linksColor}` }}>
                    Get Started
                  </a>{" "}
                </li>

                <li>
                  <a href="/" style={{ color: `${linksColor}` }}>
                    Privacy policy
                  </a>{" "}
                </li>

                <li>
                  <a href="/" style={{ color: `${linksColor}` }}>
                    Terms of use
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ------------------------ */}
        <div className="footer-socials">
          <p>A product of NewHealth Technologies Ltd.</p>
          <a href="/">
            <img src={playStore} alt="google play store" srcset="" />
          </a>
          <div>
            <a href="/">
              <img src={fb} alt="facebook" srcset="" />
            </a>
            <a href="/">
              <img src={ig} alt="instagram" srcset="" />
            </a>
            <a href="/">
              <img src={twitter} alt="twitter" srcset="" />
            </a>
          </div>
        </div>
      </div>
      {/* divider */}
      <div>
        <hr />
        <p>Copyright 2022 Nkomor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
