import React from "react";
// ---------------------------------
import logo from "../../images/logo-2.png";
import playStore from "../../images/Google play button.svg";
import screen1 from "../../images/iphone1.svg";
import screen2 from "../../images/iphone2.svg";
import screen3 from "../../images/iphone3.svg";
import facebook from "../../images/facebook.png";
import instagram from "../../images/ig.png";
import twitter from "../../images/twitter.png";
// ---------------------------------
import "./comingSoon.css";

const ComingSoon = () => {
  return (
    <div id="ComingSoon">
      {/*================================ */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* ------------------------------- */}
      <div className="details">
        <div>
          <h1>Coming soon</h1>
          <p>
            Nkomor App has evolved into a Health Payments and Savings Wallet for
            Africans. New Updates coming soon!
          </p>
          <div>
            <img src={playStore} alt="play store" />
          </div>
        </div>

        {/* -------------------------------- */}
 
          <div>
            <img src={screen1} alt="iphone" srcset="" />
            <img src={screen2} alt="iphone" srcset="" />
            <img src={screen3} alt="iphone" srcset="" />
          </div>
        </div>
   
      {/* ======================================= */}
      <div className="social-icons">
        <a href="#">
          {" "}
          <img src={facebook} alt="facebook" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={instagram} alt="instagram" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={twitter} alt="twitter" />{" "}
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
