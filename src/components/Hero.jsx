import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/bg/hero-1.avif",
      title: "Experience Luxury Like Never Before",
      subtitle: "Discover the perfect blend of comfort and elegance",
    },
    {
      image: "/bg/hero-2.avif",
      title: "Relax in Paradise",
      subtitle: "Indulge in our world-class amenities",
    },
    {
      image: "/bg/hero-3.avif",
      title: "Your Home Away From Home",
      subtitle: "Experience comfort in our luxurious suites",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt="Luxury hotel"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white w-full max-w-4xl mx-auto">
          {/* Text Content */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform
                ${
                  index === currentSlide
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
                {slide.subtitle}
              </p>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link to="/book">
              <button className="w-64 sm:w-auto bg-primary text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition duration-300 transform hover:scale-105 text-lg">
                Book Your Stay
              </button>
            </Link>
            <button className="w-64 sm:w-auto border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-primary transition duration-300 transform hover:scale-105 text-lg">
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
