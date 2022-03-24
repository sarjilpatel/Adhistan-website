import "./sidebar.css";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = ({ children, isOpen }) => (
  <div className="sidebar" style={{ right: isOpen ? "0" : "-1000px" }}>
    {children}
  </div>
);

export const SidebarLink = ({ children, ...extra }) => (
  <div {...extra} className="sidebar-link">
    {children}
  </div>
);

export const SidebarMenu = ({ children }) => (
  <div className="sidebar-menu">{children}</div>
);

export const CloseIcon = ({ toggle }) => (
  <FaTimes className="sidebar-closeIcon" onClick={toggle} />
);
