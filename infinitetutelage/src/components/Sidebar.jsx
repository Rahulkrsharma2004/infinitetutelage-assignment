import "../styles/Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCopilotLine } from "react-icons/ri";
import { RiBox3Line } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import { RiSwapBoxLine } from "react-icons/ri";
import { RiWalletLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineHistory } from "react-icons/md";
import { RiNotification4Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { RiHeadphoneLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {/* <li className="sidebar-title">Ditch Dollar</li> */}
        <li
          className="sidebar-item "
          style={{
            background:
              "linear-gradient(90deg, rgba(190, 251, 122, 0) 42.53%, #BEFB7A 230.08%)",
            color: "#BEFB7A",
            borderRight: "3px solid #BEFB7A",
          }}
        >
          <span className="sidebar-icon">
            <MdOutlineDashboard />
          </span>
          Dashboard
        </li>
        <li className="sidebar-item">
          <span className="sidebar-icon">
            <RiCopilotLine />
          </span>{" "}
          CRM
        </li>
        <li className="sidebar-item">
          <span className="sidebar-icon">
            <RiBox3Line />
          </span>{" "}
          MAM
        </li>
        <li className="sidebar-item">
          <span className="sidebar-icon">
            <RiPieChartLine />
          </span>{" "}
          PAMM
        </li>
        <li className="sidebar-item">
          <span className="sidebar-icon">
            <RiSwapBoxLine />
          </span>{" "}
          Trade
        </li>
        <li className="sidebar-item">
          <span className="sidebar-icon">
            <RiWalletLine />
          </span>{" "}
          Wallet
        </li>
        <li className="sidebar-item">
          <span className="sidebar-icon">
            <RiMoneyDollarCircleLine />
          </span>{" "}
          Accounts
        </li>
        <li className="sidebar-item">
          <span className="sidebar-icon">
            <MdOutlineHistory />
          </span>{" "}
          History
        </li>
      </ul>
      <div className="sidebar-footer">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <span className="sidebar-icon">
              <RiNotification4Line />
            </span>{" "}
            Notifications
          </li>
          <li className="sidebar-item">
            <span className="sidebar-icon">
              <IoSettingsOutline />
            </span>{" "}
            Settings
          </li>
          <li className="sidebar-item">
            <span className="sidebar-icon">
              <RiHeadphoneLine />
            </span>{" "}
            Help & Support
          </li>
          <li className="sidebar-item">
            <span className="sidebar-icon">
              <RiLogoutBoxLine />
            </span>{" "}
            Log Out
          </li>
        </ul>
        <hr />
        <div className="footerProfile">
          <div className="footerProfileIcon">
            <RiUser3Line />
          </div>
          <div className="footerProfileName">
            <h4>Shyam Shakur</h4>
            <p>shyam01.shankur@gmail..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
