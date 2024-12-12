import React from "react";
import NarBar from "./components/layout/NarBar";
import Sidebar from "./components/layout/Sidebar";
import Menu from "./components/Menu/Menu";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import SalesAnalytic from "./components/SalesAnalytic/SalesAnalytic";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NarBar />
        <div className="flex flex-1">
          <div className="flex flex-col w-3/4">
            <SalesAnalytic />
            <Menu />
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default App;
