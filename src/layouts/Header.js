import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, Navbar, NavbarBrand } from "reactstrap";
import { ReactComponent as LogoDark } from "../assets/images/logos/logo.svg";
import user1 from "../assets/images/users/user1.jpg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(true);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="header-container">
      <Navbar color="primary" dark expand="md">
        <div className="d-flex align-items-center">
          <NavbarBrand href="/" className="logo">
            <LogoDark />
          </NavbarBrand>
          <div style={{ position: "relative" }}>
            <img
              src={user1}
              alt="profile"
              className="profile-img rounded-circle"
              id="profile"
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            />
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{ position: "absolute", top: "100%", right: 0 }}>
              <DropdownMenu>
                {/* Menu items */}
                <DropdownItem tag={Link} to="/account">My Account</DropdownItem>
                <DropdownItem className="dropdown-item edit-profile-btn" tag={Link} to="/profile">Edit Profile</DropdownItem>
                <DropdownItem divider />    
                <DropdownItem  tag={Link} to="/login">Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
