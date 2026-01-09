import React from "react";


import img1 from "../assets/image9.png";
import img2 from "../assets/image3.png";
import img3 from "../assets/image2.png";
import img4 from "../assets/image7.png";
import img5 from "../assets/image01.png";
import img6 from "../assets/image8.png";


import star from "../assets/rating.png";
import butterfly from "../assets/butterfly.png";
import vector from "../assets/vector.png";


const products = [
  { id: 1, name: "Organic cotton tote bag", price: 50, oldPrice: 70, reviews: 235, rating: 5, image: img1 },
  { id: 2, name: "Hemp backpack", price: 999, oldPrice: 1199, reviews: 729, rating: 4, image: img2 },
  { id: 3, name: "Organic cotton T-shirts", price: 499, oldPrice: 699, reviews: 625, rating: 4, image: img3 },
  { id: 4, name: "Bamboo toothbrush", price: 99, oldPrice: 149, reviews: 244, rating: 5, image: img4 },
  { id: 5, name: "Bamboo pens and pencils", price: 49, oldPrice: 89, reviews: 1256, rating: 3, image: img5 },
  { id: 6, name: "Jute grocery bag", price: 59, oldPrice: 89, reviews: 895, rating: 4, image: img6 },
];

export default function BestSellingProducts() {
  return (
    <section className="relative py-12 px-6 md:px-20 bg-white">

     
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 relative z-10">
        Our Best-Selling Sustainable Products
      </h2>

     
      <img 
        src={butterfly} 
        alt="butterfly" 
        className="absolute -top-10 left-20 w-24 h-24 opacity-90 z-0"
      />
      <img 
        src={vector} 
        alt="vector" 
        className="absolute -top-8 right-20 w-28 h-28 z-0 opacity-50"
      />

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform relative"
          >
           
            {index === 3 && (
              <img
                src={vector}
                alt="vector"
                className="absolute -bottom-10 left-0 rotate-60 transform -translate-x-1/2 w-48 h-48 z-0 opacity-50"
              />
            )}

        
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-md mb-4 z-10 relative"
            />

       
            <h3 className="font-medium text-lg text-center z-10 relative">{product.name}</h3>

       
            <p className="mt-2  font-semibold z-10 relative">
              {product.price} Rs{" "}
              <span className="line-through text-gray-400 ml-2">{product.oldPrice} Rs</span>{" "}
              <span className="text-red-500 ml-2">
                (
                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}
                % OFF)
              </span>
            </p>

           
            <div className="flex mt-2 mb-2 space-x-1 z-10 relative">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={star}
                  alt="star"
                  className={`w-5 h-5 ${starIndex < product.rating ? "" : "opacity-30"}`}
                />
              ))}
            </div>

            
            <p className="text-gray-500 text-sm z-10 relative">{product.reviews} Reviews</p>

            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition z-10 relative">
              BUY NOW
            </button>
          </div>
        ))}
      </div>

   
      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          EXPLORE MORE
        </button>
      </div>
    </section>
  );
}
