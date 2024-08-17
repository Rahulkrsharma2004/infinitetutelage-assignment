// import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-4 gap-4">
          <button className="p-4 bg-gray-100 rounded-lg">Deposit</button>
          <button className="p-4 bg-gray-100 rounded-lg">Withdraw</button>
          <button className="p-4 bg-gray-100 rounded-lg">Settings</button>
          <button className="p-4 bg-gray-100 rounded-lg">Verification</button>
          <button className="p-4 bg-gray-100 rounded-lg">Bonuses</button>
          <button className="p-4 bg-gray-100 rounded-lg">MT5</button>
          <button className="p-4 bg-gray-100 rounded-lg">Transfer</button>
          <button className="p-4 bg-gray-100 rounded-lg">History</button>
          <button className="p-4 bg-gray-100 rounded-lg">Partner</button>
          <button className="p-4 bg-gray-100 rounded-lg">Exchange</button>
          <button className="p-4 bg-gray-100 rounded-lg">Analytics</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-4">Overview</h2>
        <div>
          <button className="mr-2 p-2 bg-gray-200 rounded-md">Monthly</button>
          <button className="p-2 bg-purple-500 text-white rounded-md">Yearly</button>
        </div>
        {/* Placeholder for the chart */}
        <div className="mt-4 h-48 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
