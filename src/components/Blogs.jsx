import React from "react";

import blog1 from "../assets/image11.png";
import blog2 from "../assets/image12.png";
import blog3 from "../assets/image14.png";

export default function Blogs() {
  
  const blogs = [
    {
      id: 1,
      title: "Why Eco Bags Matter",
      description: "Learn how reusable bags help protect the environment.",
      image: blog1,
    },
    {
      id: 2,
      title: "Sustainable Living Tips",
      description: "Simple habits you can adopt to reduce your carbon footprint.",
      image: blog2,
    },
    {
      id: 3,
      title: "Greenify Success Stories",
      description: "See how our customers are making a difference with eco-friendly choices.",
      image: blog3,
    },
  ];

  return (
    <section className="px-6 py-12 bg-primary">
      <h2 className="text-2xl font-semibold mb-8 text-center text-white">Blogs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            
           
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            
           
            <div className="p-5 flex flex-col ">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm ">{blog.description}</p>
              
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded  transition self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
