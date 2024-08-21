import "../styles/Navbar.css";
import {
  RiNotification4Line,
  RiSearch2Line,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(Context);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("first");
  };
  
  // if (window.innerWidth > 1000) {
  //   setSidebarOpen(true);
  // }

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-hamburgerDiv">
          {sidebarOpen ? (
            <RiCloseLine className="navbar-hamburger" onClick={toggleSidebar} />
          ) : (
            <RiMenuLine className="navbar-hamburger" onClick={toggleSidebar} />
          )}

          <div className="navbar-logo">Dashboard</div>
        </div>
        <div className="navbar-search">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <RiSearch2Line className="search-icon" />
          </div>
          <span className="navbar-icon">
            <RiNotification4Line />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
