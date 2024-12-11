import React from "react";
import NarBar from "./components/layout/NarBar";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NarBar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {/* Add your main content here */}
          <h1 className="text-xl font-bold">Welcome to the Dashboard!</h1>
          <p>This is your main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
