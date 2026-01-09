import React from "react";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/users.png";
import Typography from "./Typography";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 ">
   
<Typography variant="h1" fontKaoly className="mb-4 text-green-500 font-bold text-3xl">
        Greenify
      </Typography>

    
      <ul className="flex gap-6 text-sm">
        <li className="hover:text-purple-600 cursor-pointer">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">shop</li>
         <li className="hover:text-purple-600 cursor-pointer">categories</li>
        <li className="hover:text-purple-600 cursor-pointer">About-us</li>
        <li className="hover:text-purple-600 cursor-pointer">Contact-us</li>
      </ul>

      <div className="flex gap-4 items-center cursor-pointer">
        <img src={cartIcon} alt="Cart" className="w-6 h-6" />
        <img src={userIcon} alt="User" className="w-6 h-6 rounded-full" />
      </div>
    </nav>
  );
}
