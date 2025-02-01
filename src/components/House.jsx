import React from "react";
import home from "../assets/images/hero/hero-image.png";

const House = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center mt-15">
        <h1 className="text-5xl font-bold">We will build your house of your dream</h1>
        <p className="text-lg font-bold mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
          magnam!
        </p>
        <div className="flex gap-3 mt-5">
          <button className="bg-white text-black px-4 py-3 rounded-lg">Book Now</button>
          <button className="bg-white/[0.12] py-3 px-4 rounded-lg hover:bg-white hover:text-black">Contact Us</button>
        </div>
      </div>
      <div className="mt-16">
        <img className="mx-auto max-w-full rounded-t-xl rounded-tr-xl" src={home} alt="" />
      </div>
    </div>
  );
};

export default House;
