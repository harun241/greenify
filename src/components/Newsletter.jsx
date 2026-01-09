import React from "react";

export default function Newsletter() {
  return (
    <section className="px-6 py-12 flex justify-center relative">

    
      <img
        src="/assets/image10.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <img 
        src="/assets/leaf.png" 
        alt="Leaf" 
        className="absolute bottom-1 left-0 w-12 h-12 opacity-80" 
      />
      <img 
        src="/assets/leaf1.png" 
        alt="Leaf" 
        className="absolute -top-6 right-6 w-14 h-14 opacity-80" 
      />
      <img 
        src="/assets/butterfly.png" 
        alt="butterfly" 
        className="absolute -top-4 left-4 w-12 h-12" 
      />

  
      <div className="relative max-w-4xl w-full bg-white bg-opacity-80 rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-lg">

      
        <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
          <img
            src="/assets/image10.png"
            alt="Eco products"
            className="w-64 h-64 lg:w-full lg:h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
          />
        </div>

      
        <div className="w-full lg:w-2/3 px-6 py-8 flex flex-col justify-center items-center text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-700 mb-6">
            Join our green community and receive exclusive offers and insightful content straight to your inbox!
          </p>

          <form className="flex flex-col gap-4 w-full">
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
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition mt-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
