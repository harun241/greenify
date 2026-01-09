import React from "react";
import newsletterImg from "../assets/image10.png"; 
import leaf from "../assets/leaf.png"; 
import leaf1 from "../assets/leaf1.png";
import butterfly from "../assets/butterfly.png";

export default function Newsletter() {
  return (
    <section className="px-6 py-12 flex justify-center relative">
      
    
      <img
        src={newsletterImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

  
      <img 
        src={leaf} 
        alt="Leaf" 
        className="absolute bottom-1 left-0 w-12 h-12 opacity-80" 
      />

    
      <img 
        src={leaf1} 
        alt="Leaf" 
        className="absolute -top-6 right-6 w-14 h-14 opacity-80 " 
      />

  
      <img 
        src={butterfly} 
        alt="butterfly" 
        className="absolute -top-4 left-4 w-12 h-12 " 
      />

   
      <div className="relative max-w-4xl w-full bg-white bg-opacity-80 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg">
        
    
        <div className="md:w-1/3">
          <img
            src={newsletterImg}
            alt="Eco products"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

 
        <div className="md:w-2/3 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Subscribe to our Newsletter</h2>
          <p className="text-gray-700 mb-6">
            Join our green community and receive exclusive offers and insightful content straight to your inbox!
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded  transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
