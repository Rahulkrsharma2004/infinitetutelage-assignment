import "../styles/Dashboard.css";
import { RiArrowLeftDownLine } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { MdOutlineHistory } from "react-icons/md";
import { RiUser2Line } from "react-icons/ri";
import { RiTokenSwapLine } from "react-icons/ri";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";
import { useEffect } from "react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Dashboard = () => {
  useEffect(() => {
    const ctx = document.getElementById("uniqueChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "",
            data: [
              800, 300, 1000, 200, 900, 500, 700, 1100, 400, 600, 200, 500,
            ],
            backgroundColor: "rgba(128, 90, 213, 0.7)",
            borderRadius: 5,
            barThickness: 25, 
          },
        ],
      },
      options: {
        responsive:true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {

            grid: {
              display: false, 
            },
            ticks:{
              color:"#98A2B3",
              font:{
                weight:"400",
                size:"12px",
                family:"Inter"
             },
            },
            barPercentage: 0.5,
            categoryPercentage: 0.5, 
          },
          y: {
            beginAtZero: true,
            max: 1500,
            ticks: {
              color:"#98A2B3",
              font:{
                 weight:"400",
                 size:"12px",
                 family:"Inter"
              },
              stepSize: 250, 
              callback: function(value) {
                return value === 0 ? '0' : `$${value}`;  // Conditionally format tick labels
              }
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="card">
        <h2>Quick Links</h2>
        <div className="grid-container">
          <div className="grid-item">
            <span>
              <RiArrowLeftDownLine />
            </span>
            <p>Deposit</p>
          </div>
          <div className="grid-item">
            <span>
              <RiArrowRightUpLine />
            </span>
            <p>Withdraw</p>
          </div>
          <div className="grid-item">
            <span>
              <IoSettingsOutline />
            </span>
            <p>Settings</p>
          </div>
          <div className="grid-item">
            <span>
              <RiUserFollowLine />
            </span>
            <p>Verification</p>
          </div>
          <div className="grid-item">
            <span>
              <IoMdStarOutline />
            </span>
            <p>Bonuses</p>
          </div>
          <div className="grid-item">
            <span>
              <FaChartLine />
            </span>
            <p>MT5</p>
          </div>
          <div className="grid-item">
            <span>
              <RiArrowLeftRightLine />
            </span>
            <p>Transfer</p>
          </div>
          <div className="grid-item">
            <span>
              <MdOutlineHistory />
            </span>
            <p>History</p>
          </div>
          <div className="grid-item">
            <span>
              <RiUser2Line />
            </span>
            <p>Partner</p>
          </div>
          <div className="grid-item">
            <span>
              <RiTokenSwapLine />
            </span>
            <p>Exchange</p>
          </div>
          <div className="grid-item">
            <span>
              <RiBarChartGroupedLine />
            </span>
            <p>Analytics</p>
          </div>
        </div>
      </div>
      <div className="chart-placeholder">
        <div className="unique-card unique-overview-card">
          <div className="unique-overview-header">
            <h2>Overview</h2>
            <div className="unique-download-report">
              <span>
                <RiDownloadLine />
              </span>
              Download Report
            </div>
          </div>
          <div className="unique-overview-buttons">
            <div className="unique-monthly-button">Monthly</div>
            <div className="unique-yearly-button">Yearly</div>
          </div>
          <canvas
            id="uniqueChart"
            className="unique-chart-placeholder"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
