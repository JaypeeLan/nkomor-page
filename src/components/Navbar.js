import React from "react";
import logo from "../images/logo.png";
import line from "../images/Line.png";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarComponents";

const Navbar = ({
  navItemOne,
  navItemTwo,
  navItemThree,
  navItemFour,
  btnTitle,
}) => {
  const showNav = () => {
    console.log("hello");
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
            {navItemOne}
          </NavLink>
          <img src={line} alt="divider" srcset="" />
          <NavLink to="/" activeStyle>
            {navItemTwo}
          </NavLink>
          <img src={line} alt="divider" srcset="" />
          <NavLink to="/" activeStyle>
            {navItemThree}
          </NavLink>
          <img src={line} alt="divider" srcset="" />
          <NavLink to="/" activeStyle>
            {navItemFour}
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">{btnTitle}</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
