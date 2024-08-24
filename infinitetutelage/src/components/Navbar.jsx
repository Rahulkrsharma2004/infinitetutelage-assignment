import "../styles/Navbar.css";
import {
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
            <svg
              className="search-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.325 0.25C9.6784 0.25 12.4 2.9716 12.4 6.325C12.4 9.6784 9.6784 12.4 6.325 12.4C2.9716 12.4 0.25 9.6784 0.25 6.325C0.25 2.9716 2.9716 0.25 6.325 0.25ZM6.325 11.05C8.93522 11.05 11.05 8.93522 11.05 6.325C11.05 3.7141 8.93522 1.6 6.325 1.6C3.7141 1.6 1.6 3.7141 1.6 6.325C1.6 8.93522 3.7141 11.05 6.325 11.05ZM12.0524 11.0979L13.9619 13.0068L13.0068 13.9619L11.0979 12.0524L12.0524 11.0979Z"
                fill="#667085"
              />
            </svg>
          </div>
          <span className="navbar-icon">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4 10.375H13.75V11.725H0.25V10.375H1.6V5.65C1.6 4.21783 2.16893 2.84432 3.18162 1.83162C4.19432 0.818927 5.56783 0.25 7 0.25C8.43217 0.25 9.80568 0.818927 10.8184 1.83162C11.8311 2.84432 12.4 4.21783 12.4 5.65V10.375ZM11.05 10.375V5.65C11.05 4.57587 10.6233 3.54574 9.86378 2.78622C9.10426 2.0267 8.07413 1.6 7 1.6C5.92587 1.6 4.89574 2.0267 4.13622 2.78622C3.3767 3.54574 2.95 4.57587 2.95 5.65V10.375H11.05ZM4.975 13.075H9.025V14.425H4.975V13.075Z"
                fill="#667085"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
