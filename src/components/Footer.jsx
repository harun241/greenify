import React from "react";

// Social Icons
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";


import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

   
        <div>
          <h1 className="inline-block text-2xl font-kaoly font-bold text-green-500 bg-gray-100 px-6 py-2 rounded-xl shadow-md mb-4">
            Greenify
          </h1>

          <h2 className="font-bold mb-2">Pages</h2>

  
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">Categories</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>

          
          <div className="flex gap-4 mt-8">
            <a href="#">
              <img src={facebook} alt="Facebook" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="#">
              <img src={x} alt="X" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
            </a>
          </div>
        </div>

        
     
<div className="mt-16 md:mt-12">
  <h3 className="font-semibold mb-4">Contact us</h3>

  <p className="flex items-center gap-3">
    <img src={phone} alt="Phone" className="w-4 h-4 opacity-80" />
    +91 123456789
  </p>

  <p className="flex items-center gap-3 mt-2">
    <img src={mail} alt="Email" className="w-4 h-4 opacity-80" />
    info@greenify.com
  </p>

  <p className="flex items-start gap-3 mt-2">
    <img src={location} alt="Location" className="w-4 h-4 mt-1 opacity-80" />
    102-Complex, Xyz Road, City name, State, 136458
  </p>
</div>


      </div>

    
      <p className="text-gray-500 text-sm mt-8 text-center">
        Terms & Services | Greenify © All rights reserved 2023
      </p>
    </footer>
  );
}
