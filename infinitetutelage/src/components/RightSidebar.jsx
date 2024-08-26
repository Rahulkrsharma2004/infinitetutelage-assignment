import "../styles/RightSidebar.css";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="account-section">
        <h2>Trading Accounts</h2>
        <div className="account-card">
          <h3>Master Account</h3>
          <p className="account-id">
            <span>CTrader</span> #273728
          </p>
          <div className="usd">
            <p className="account-balance">
              <span>0.00</span> USD
            </p>
            <span >
            <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16987 3.62403L1.2939 11.5L0 10.2061L7.87505 2.33013H0.934282V0.5H11V10.5657H9.16987V3.62403Z"
                  fill="#667085"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="account-card" >
          <h3>Master Account</h3>
          <p className="account-id">
            <span>CTrader</span> #273728
          </p>
          <div className="usd">
            <p className="account-balance">
              <span>0.00</span> USD
            </p>
            <span>
            <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16987 3.62403L1.2939 11.5L0 10.2061L7.87505 2.33013H0.934282V0.5H11V10.5657H9.16987V3.62403Z"
                  fill="#667085"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="trades-section">
        <h2>Open Trades</h2>

        <div className="trade-card">
          <div className="trade-info">
            <div style={{marginBottom:"10px"}}>
              <span className="trade-label">GBPUSD</span>
              <span className="trade-status long">Long</span>
            </div>
            <div>
              <span className="trade-size">0.12</span>
            </div>
          </div>
          <div className="trade-info2">
            <span className="trade-amount positive">+56.00 <span className="trade-usd">USD</span> </span>
          </div>
        </div>

        <div className="trade-card">
          <div className="trade-info">
            <div style={{marginBottom:"10px"}}>
              <span className="trade-label">USDJPY</span>
              <span className="trade-status long">Long</span>
            </div>
            <div>
              <span className="trade-size">0.52</span>
            </div>
          </div>
          <div className="trade-info2">
            <span className="trade-amount negative">-0.09 <span className="trade-usd">USD</span></span>
          </div>
        </div>

        <div className="trade-card">
          <div className="trade-info">
            <div style={{marginBottom:"10px"}}>
              <span className="trade-label">EURUSD</span>
              <span className="trade-status short">Short</span>
            </div>
            <div>
              <span className="trade-size">0.34</span>
            </div>
          </div>
          <div className="trade-info2">
            <span className="trade-amount negative">-1.09 <span className="trade-usd">USD</span> </span>
          </div>
        </div>


        



      </div>
    </div>
  );
};

export default RightSidebar;
