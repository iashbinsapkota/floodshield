
import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import sidebarImage from "../assets/images/logos/logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';



const navigation = [
  {
    title: " | Dashboard",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
  },

];

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar-container ${isSidebarOpen ? '' : 'collapsed'}`}>
      <div className="sidebar p-3">
        {/* Sidebar image */}
        <img src={sidebarImage} alt="Sidebar" className="sidebar-image" />

        <div className="d-flex align-items-center">
          <Logo />
          
        </div>
        <div className="pt-4 mt-2">
          <Nav vertical className="sidebarNav">
            {navigation.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={navi.href}
                  className={`nav-link py-3 ${location.pathname === navi.href ? 'active' : ''}`}
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        <i className={`bi ${isSidebarOpen ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
      </button>
    </div>
  );
};
export default AdminSidebar;
