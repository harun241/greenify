import React from "react";
import sustainableIcon from "../assets/sustain.png";
import ecoIcon from "../assets/eco.png";
import qualityIcon from "../assets/hqs.png";
import packagingIcon from "../assets/spackage.png";
import light from "../assets/light.png";

export default function WhyChoose() {
  const features = [
    {
      icon: sustainableIcon,
      title: "Sustainable Products",
      description:
        "Explore our carefully curated selection of sustainable products, each designed to reduce your carbon footprint.",
    },
    {
      icon: ecoIcon,
      title: "Eco-Friendly Choices",
      description:
        "Make conscious choices with our eco-friendly products, knowing that your purchases promote ethical sourcing and responsible manufacturing practices.",
    },
    {
      icon: qualityIcon,
      title: "High-Quality Selection",
      description:
        "Invest in long-lasting and reliable products that meet our stringent quality standards, ensuring your satisfaction and the longevity of your purchases.",
    },
    {
      icon: packagingIcon,
      title: "Sustainable Packaging",
      description:
        "Our sustainable packaging ensures that your orders arrive safely while minimizing their impact on the planet.",
    },
  ];

  return (
    <section className="relative px-6 md:px-20 py-16 bg-white">
   
      <img 
        src={light} 
        alt="light" 
        className="absolute top-30 left-20 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 opacity-90 z-0" 
      />
      

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10">
        Why Choose Greenify?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow hover:shadow-lg transition bg-white relative"
          >
            <img src={f.icon} alt={f.title} className="w-16 h-16 mb-4 z-10" />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
