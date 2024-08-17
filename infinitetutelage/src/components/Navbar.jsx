import "../styles/Navbar.css";
import { RiNotification4Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Dashboard</div>
      <div className="navbar-search">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <RiSearch2Line className="search-icon" />
        </div>
        <span className="navbar-icon">
          <RiNotification4Line />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
