import "./navbar.css";
import { Button } from "@mui/material";
import Lottie from "lottie-react";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavbarContainer = ({ children }) => (
  <div className="navbar">{children}</div>
);

export const Logo = () => <div className="logo" />;

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
  <div {...extra} className="menu-item">
    {children}
  </div>
);
