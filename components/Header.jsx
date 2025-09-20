import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-left border-b border-gray-800 pb-6">
      <div>
        <h1 className="text-5xl font-black text-white tracking-[0.2em] uppercase">REPUBLIC</h1>
        <p className="text-amber-400 mt-1 font-semibold text-xl tracking-wider">TREND CHART</p>
      </div>
      <p className="text-gray-500 text-xs mt-3">
        Based on YouTube & Instagram trends
      </p>
    </header>
  );
};

export default Header;
