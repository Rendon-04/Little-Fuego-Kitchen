import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import logo from "../assets/Logo.svg";
import DropdownMenu from "./DropdownMenu";

export default function Navbar({ onMenuClick, onOrderClick, onAboutClick, onContactClick, onHomeClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (callback) => {
    callback();
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="navbar">
      <div className="menu-toggle-container" ref={dropdownRef}>
        <button className="menu-toggle" aria-label="Toggle menu" type="button" onClick={toggleDropdown}>
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
        </button>

        {isDropdownOpen && (
          <DropdownMenu
            onMenuClick={() => handleMenuItemClick(onMenuClick)}
            onOrderClick={() => handleMenuItemClick(onOrderClick)}
            onAboutClick={() => handleMenuItemClick(onAboutClick)}
            onContactClick={() => handleMenuItemClick(onContactClick)}
          />
        )}
      </div>

      <img className="logo-icon" alt="Logo" src={logo} onClick={onHomeClick} />

      <nav className="nav-menu" aria-label="Primary">
        <button className="nav-item" onClick={onMenuClick}>
          Menu
        </button>
        <button className="nav-item" onClick={onOrderClick}>
          Order
        </button>
        <button className="nav-item" onClick={onAboutClick}>
          About
        </button>
        <button className="nav-item nav-item-contact" onClick={onContactClick}>
          Contact
        </button>
      </nav>
    </div>
  );
}
