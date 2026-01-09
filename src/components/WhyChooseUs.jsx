import React from "react";

export default function WhyChoose() {
  const features = [
    {
      icon: "/assets/sustain.png",
      title: "Sustainable Products",
      description:
        "Explore our carefully curated selection of sustainable products, each designed to reduce your carbon footprint.",
    },
    {
      icon: "/assets/eco.png",
      title: "Eco-Friendly Choices",
      description:
        "Make conscious choices with our eco-friendly products, knowing that your purchases promote ethical sourcing and responsible manufacturing practices.",
    },
    {
      icon: "/assets/hqs.png",
      title: "High-Quality Selection",
      description:
        "Invest in long-lasting and reliable products that meet our stringent quality standards, ensuring your satisfaction and the longevity of your purchases.",
    },
    {
      icon: "/assets/spackage.png",
      title: "Sustainable Packaging",
      description:
        "Our sustainable packaging ensures that your orders arrive safely while minimizing their impact on the planet.",
    },
  ];

  return (
    <section className="relative px-6 sm:px-12 md:px-20 py-16 bg-white overflow-hidden">
     
      <img
        src="/assets/light.png"
        alt="light"
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-80 z-0 sm:w-28 sm:h-28 md:w-32 md:h-32 md:top-10"
      />

      
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-12 relative z-10">
        Why Choose Greenify?
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
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
