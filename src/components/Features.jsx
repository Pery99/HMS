import React from "react";

const Features = () => {
  const features = [
    {
      image: "/hotel-images/pool.jpg",
      title: "Swimming Pool",
      description: "Luxury infinity pool with panoramic views",
      details: [
        "Temperature controlled water",
        "Poolside service",
        "Private cabanas",
        "Children's pool area",
      ],
    },
    {
      image: "/hotel-images/dining.jpg",
      title: "Fine Dining",
      description: "World-class restaurants and cuisine",
      details: [
        "International cuisine",
        "24/7 room service",
        "Award-winning chefs",
        "Wine cellar",
      ],
    },
    {
      image: "/hotel-images/spa.jpg",
      title: "Spa & Wellness",
      description: "Premium spa treatments and facilities",
      details: [
        "Massage therapy",
        "Facial treatments",
        "Steam room & sauna",
        "Yoga classes",
      ],
    },
    {
      image: "/hotel-images/gym.jpg",
      title: "Fitness Center",
      description: "State-of-the-art gym equipment",
      details: [
        "Personal trainers",
        "Modern equipment",
        "24/7 access",
        "Fitness classes",
      ],
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            World-Class Amenities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury living with our exceptional range of facilities
            and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-primary mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
