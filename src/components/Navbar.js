import React from 'react'
import logo from "../images/logo.png";

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
  return (
    <>
    
    <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            {navItemOne}
          </NavLink>
          <NavLink to="/" activeStyle>
            {navItemTwo}
          </NavLink>
          <NavLink to="/" activeStyle>
            {navItemThree}
          </NavLink>
          <NavLink to="/" activeStyle>
            {navItemFour}
          </NavLink>
          {/* Second Nav */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">{btnTitle}</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar