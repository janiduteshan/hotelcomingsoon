import React from "react";
import { SocialIcon } from "react-social-icons";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-black text-white p-4">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl font-extrabold mb-6 bg-white text-transparent bg-clip-text text-center">
          Hotel Buddima Samudra
        </h1>
        <p className="text-2xl mb-8 text-center font-light">
          We're doing something cool on our website. BRB!
        </p>
      </div>
      <div className="flex justify-center space-x-6 mb-6">
        <p className="text-xl text-center font-medium">
          Till then, follow us on socials ;)
        </p>
      </div>
      <div className="flex justify-center space-x-6 mb-6">
        <SocialIcon
          url="https://www.instagram.com/hotelbuddimasamudra"
          bgColor="#000000"
        />
        <SocialIcon
          url="https://www.facebook.com/buddimasamudra"
          bgColor="#000000"
        />
      </div>
      <p>© 2024 Hotel Buddima Samudra. All rights reserved.</p>
    </div>
  );
};

export default MaintenancePage;
