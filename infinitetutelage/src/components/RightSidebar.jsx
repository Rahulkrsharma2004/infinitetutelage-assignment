// import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-64 bg-white p-4 rounded-lg">
      <div className="mb-6">
        <h2 className="font-semibold mb-4">Trading Accounts</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-sm">Master Account</h3>
          <p className="text-xl font-bold">0.00 USD</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-sm">Master Account</h3>
          <p className="text-xl font-bold">0.00 USD</p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Open Trades</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between">
            <p>GBPUSD</p>
            <p className="text-green-500">+56.00 USD</p>
          </div>
          <div className="flex justify-between">
            <p>USDJPY</p>
            <p className="text-red-500">-0.09 USD</p>
          </div>
          <div className="flex justify-between">
            <p>EURUSD</p>
            <p className="text-red-500">-1.09 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
