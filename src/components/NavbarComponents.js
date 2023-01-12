import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #080809;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
// -=----------------------
export const MobileNavMenu = styled.div`
  position: absolute;
  z-index: 99;
  top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: pink;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  transition: all 0.3s ease;
`;
// ------------------------------

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    margin-right: 70px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 30px;
  background: #00605f;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
