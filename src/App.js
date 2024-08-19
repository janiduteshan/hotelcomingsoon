import React from "react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Hotel Buddima Samudra</h1>
        <p className="text-lg mb-4">
          We're currently working on our website. Please check back soon!
        </p>
        <div className="relative mt-10 mb-10">
          <div className="animate-spin-slow w-20 h-20 border-4 border-solid border-gray-300 border-t-transparent rounded-full mx-auto"></div>
        </div>
        <p className="text-sm">Thank you for your patience.</p>
      </div>
    </div>
  );
};

export default MaintenancePage;
