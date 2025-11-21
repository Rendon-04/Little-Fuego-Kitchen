import "../styles/DropdownMenu.css";

export default function DropdownMenu({ onMenuClick, onOrderClick, onAboutClick, onContactClick }) {
  return (
    <div className="dropdown-menu">
      <button className="dropdown-item" onClick={onMenuClick}>
        Menu
      </button>
      <button className="dropdown-item" onClick={onOrderClick}>
        Order
      </button>
      <button className="dropdown-item" onClick={onAboutClick}>
        About
      </button>
      <button className="dropdown-item" onClick={onContactClick}>
        Contact
      </button>
    </div>
  );
}
