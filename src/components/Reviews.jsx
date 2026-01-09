import React from "react";

import mark from "../assets/mark.png";
import toothbrushUser from "../assets/toothbrushUser.png";
import hempUser from "../assets/hempUser.png";
import star from "../assets/rating.png"; 
import reviewBadge from "../assets/smile.png"; 
import activeCircle from "../assets/circle.png"; 

const reviews = [
  {
    id: 1,
    name: "Mark Anderson",
    text: `I absolutely love my Organic Cotton Tote Bag from Greenify! It's not only stylish but also eco-friendly. Knowing that I'm making a positive impact on the environment with my purchase makes me feel great. Highly recommend this sustainable accessory!`,
    image: mark,
    rating: 5,
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    text: `The Bamboo Toothbrushes from Greenify are a game-changer! The quality is outstanding, and I love the fact that they are made from renewable bamboo. My oral care routine just got a lot greener, and I couldn't be happier. Kudos to Greenify for offering such fantastic eco-friendly products!`,
    image: toothbrushUser,
    rating: 4,
    status: "active",
  },
  {
    id: 3,
    name: "Emily Lee",
    text: `I recently bought the Hemp Backpack from Greenify, and I must say it's a fantastic investment. The durability of the hemp material is impressive, and I feel good knowing I'm choosing a sustainable alternative. This backpack is perfect for my outdoor adventures and daily commutes. Thumbs up for the eco-conscious design!`,
    image: hempUser,
    rating: 4,
    status: "active",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-12 px-6 ">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform relative border-2 border-green-600"
          >
         
            <img
              src={activeCircle}
              alt="Status"
              className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 z-20 ${
                review.status === "active" ? "border-green-600" : "border-gray-400"
              }`}
            />

            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />

           
            <p className="text-gray-700 mb-4 text-center">{review.text}</p>

          
            <div className="flex justify-between items-center w-full mb-4 px-4">
             
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={star}
                    alt="star"
                    className={`w-5 h-5 ${starIndex < review.rating ? "" : "opacity-30"}`}
                  />
                ))}
              </div>

           
              <img src={reviewBadge} alt="Badge" className="w-6 h-6" />
            </div>

           
            <h3 className="font-semibold text-green-700 text-center mt-auto">
              - {review.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
