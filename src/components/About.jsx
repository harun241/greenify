import React, { useState } from "react";
import butterfly from "../assets/butterfly.png";
import envr from "../assets/envr.png";
import leaf01 from "../assets/leaf01.png";
import circle from "../assets/arrow.png";
export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-12 px-6 overflow-hidden">
     
      <img
        src={envr}
        alt="environment background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <h2 className="text-3xl font-bold mb-2 text-green-900">
          About Us
        </h2>

     
        <h1 className="text-2xl mt-6 font-kaoly font-bold text-primary bg-gray-100 px-6 py-2 rounded-xl shadow-md mb-6 inline-block">
          Greenify
        </h1>

     
        <img
          src={butterfly}
          alt="butterfly"
          className="absolute top-0 right-0 w-12 h-12"
        />
        <img
          src={circle}
          alt="circle"
          className="absolute left-0 bottom-0 w-12 h-12"
        />
        <img
          src={leaf01}
          alt="leaf01"
          className="absolute right-6 bottom-0 w-12 h-12"
        />

   
        <p className="text-gray-700 text-lg mb-6 text-justify">
          At Greenify, we are more than just an e-commerce website; we are a
          passionate community dedicated to fostering a sustainable and
          eco-friendly lifestyle. Our mission is to empower environmentally
          conscious consumers by offering a curated selection of high-quality,
          sustainable products that inspire positive change and make a
          difference in the world.
        </p>

       
        {expanded && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              Mission Statement
            </h3>
            <p className="text-gray-700 text-lg text-center mb-4">
              "To be the leading platform for sustainable living, providing
              eco-friendly products and fostering a green community that promotes
              conscious consumption and environmental responsibility."
            </p>

            <h3 className="text-2xl font-bold text-green-900 mb-2">
              Vision Statement
            </h3>
            <p className="text-gray-700 text-lg text-center">
              "To create a greener future for generations to come, where every
              choice matters, and sustainability is at the core of everyday
              living. We envision a world where eco-friendly practices are the
              norm, and together, we can make a significant impact on the health
              of our planet."
            </p>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          {expanded ? "READ LESS" : "READ MORE"}
        </button>
      </div>
    </section>
  );
}
