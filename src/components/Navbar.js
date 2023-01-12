import React, { useRef, useState } from "react";
import logo from "../images/logo.png";
import line from "../images/Line.png";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MobileNavMenu,
} from "./NavbarComponents";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const showNav = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars onClick={showNav} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <img src={line} alt="divider" srcset="" />
          <NavLink to="/" activeStyle>
            About
          </NavLink>
          <img src={line} alt="divider" srcset="" />
          <NavLink to="/" activeStyle>
            Contact Us
          </NavLink>
          <img src={line} alt="divider" srcset="" />
          <NavLink to="/" activeStyle>
            FAQ
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/download">Download</NavBtnLink>
        </NavBtn>

        {showNavbar && (
          <MobileNavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>

            <NavLink to="/" activeStyle>
              About
            </NavLink>

            <NavLink to="/" activeStyle>
              Contact Us
            </NavLink>

            <NavLink to="/" activeStyle>
              FAQ
            </NavLink>
          </MobileNavMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
