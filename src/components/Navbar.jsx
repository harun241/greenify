import React, { useState } from "react";
import Typography from "./Typography";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
  
        <Typography variant="h1" fontKaoly className="text-green-500 font-bold text-3xl">
          Greenify
        </Typography>

      
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Shop</li>
          <li className="hover:text-purple-600 cursor-pointer">Categories</li>
          <li className="hover:text-purple-600 cursor-pointer">About Us</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact Us</li>
        </ul>

 
        <div className="flex gap-4 items-center">
          <img src="/assets/cart.png" alt="Cart" className="w-6 h-6 cursor-pointer" />
          <img src="/assets/users.png" alt="User" className="w-6 h-6 rounded-full cursor-pointer" />

        
          <button
            className="md:hidden ml-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>

    
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md mt-2 rounded-lg p-4 flex flex-col gap-3 absolute w-full left-0 z-40">
          <li className="hover:text-purple-600 cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
          <li className="hover:text-purple-600 cursor-pointer" onClick={() => setIsOpen(false)}>Shop</li>
          <li className="hover:text-purple-600 cursor-pointer" onClick={() => setIsOpen(false)}>Categories</li>
          <li className="hover:text-purple-600 cursor-pointer" onClick={() => setIsOpen(false)}>About Us</li>
          <li className="hover:text-purple-600 cursor-pointer" onClick={() => setIsOpen(false)}>Contact Us</li>
        </ul>
      )}
    </nav>
  );
}
