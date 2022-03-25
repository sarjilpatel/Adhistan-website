import "./navbar.css";
import { Button } from "@mui/material";
import Lottie from "lottie-react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink as Link } from "react-router-dom";

export const NavbarContainer = ({ children }) => (
  <div className="navbar" id="navbar">
    {children}
  </div>
);

export const Logo = () => (
  <a href="/">
    <img src={logo} />
  </a>
);

export const Menu = ({ children }) => <div className="menu">{children}</div>;

export const MenuIcon = ({ onClick, ref, open, ...extra }) => (
  <Button className="menu-icon" onClick={onClick}>
    {open ? <FaTimes className="icon" /> : <FaBars className="icon" />}
    {/* <Lottie
      animationData={require("../assets/icons/menu.json")}
      autoplay={false}
      loop={false}
      ref={ref}
    /> */}
  </Button>
);

export const MenuItemWrapper = ({ children, ...extra }) => (
  <div className="menu-wrapper" {...extra}>
    {children}
  </div>
);

export const NavLink = ({ children, ...extra }) => (
  <Link {...extra} className="menu-item">
    {children}
  </Link>
);
