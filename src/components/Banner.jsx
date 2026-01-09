import React from "react";
import image from "../assets/banner.png";
import butterfly from "../assets/butterfly.png";

export default function Banner() {
  return (
    <section className="relative bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-0 overflow-hidden">

     
      <div className="md:w-1/2 z-10 flex flex-col justify-center gap-4 relative">
      
        <img 
          src={butterfly} 
          alt="butterfly" 
          className="absolute -top-4 right-0 w-12 h-12 z-20 " 
        />

      <h1 className="font-mont text-4xl md:text-5xl font-bold text-black leading-snug">
  Welcome to Greenify
</h1>
<p className="font-mont text-gray-700 text-2xl font-semibold">
  Your Sustainable <br /> <span className="text-green-600">Shopping <br /> Destination</span>
</p>
<p className="font-lato text-gray-600">
  "Discover Sustainability. Embrace Greenify. <br />
  Your Eco-Friendly Haven for Conscious Shopping."
</p>


        <div className="relative w-fit mt-2">
        
          <img 
            src={butterfly} 
            alt="butterfly" 
            className="absolute -top-5 -right-30 w-8 h-8 z-20 opacity-50"
          />

          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition w-fit">
            SHOP NOW
          </button>
        </div>
      </div>

     
      <div className="md:w-1/2 relative flex justify-center items-start -mt-8">
       
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-3xl -z-20"></div>

        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-2xl shadow-xl -z-10"></div>

      
        <img
          src={image}
          alt="Eco Product"
          className="relative w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl z-10"
        />
      </div>

  
      <div className="absolute top-10 left-0 w-12 h-12 bg-green-400 rounded-full rotate-45 -z-10"></div>
    </section>
  );
}
