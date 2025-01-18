import React, { useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const rooms = [
    {
      image: "/hotel-images/room1.jpg",
      gallery: [
        "/hotel-images/room1.jpg",
        "/hotel-images/room1.jpg",
        "/hotel-images/room1.jpg",
      ],
      title: "Deluxe Ocean Suite",
      price: "$299",
      size: "45m²",
      occupancy: "2 Adults, 1 Child",
      bedType: "King Size Bed",
      description:
        "Experience luxury with panoramic ocean views, premium amenities, and elegant furnishings.",
      amenities: [
        "Ocean View Balcony",
        "Rain Shower",
        "Mini Bar",
        "55' Smart TV",
        "Free Wi-Fi",
        "Room Service",
        "Air Conditioning",
        "Coffee Maker",
      ],
    },
    {
      image: "/hotel-images/room2.jpg",
      gallery: [
        "/hotel-images/room2.jpg",
        "/hotel-images/room2.jpg",
        "/hotel-images/room2.jpg",
      ],
      title: "Executive Business Suite",
      price: "$249",
      size: "40m²",
      occupancy: "2 Adults",
      bedType: "Queen Size Bed",
      description:
        "Perfect for business travelers, featuring a dedicated workspace and access to executive lounge.",
      amenities: [
        "City View",
        "Work Desk",
        "Executive Lounge Access",
        "Coffee Machine",
        "High-Speed Internet",
        "Laptop Safe",
        "Ironing Set",
        "Premium Toiletries",
      ],
    },
    {
      image: "/hotel-images/room3.jpg",
      gallery: [
        "/hotel-images/room3.jpg",
        "/hotel-images/room3.jpg",
        "/hotel-images/room3.jpg",
      ],
      title: "Premium Family Suite",
      price: "$399",
      size: "65m²",
      occupancy: "4 Adults",
      bedType: "2 King Size Beds",
      description:
        "Spacious family accommodation with separate living area and premium entertainment options.",
      amenities: [
        "Private Terrace",
        "Living Room",
        "Kitchenette",
        "2 Bathrooms",
        "Gaming Console",
        "Dining Area",
        "Walk-in Closet",
        "Premium View",
      ],
    },
  ];

  const handleGalleryOpen = (roomIndex) => {
    setActiveRoom(roomIndex);
    setShowGallery(true);
    setCurrentImage(0);
  };

  const handleGalleryClose = () => {
    setShowGallery(false);
    setActiveRoom(null);
  };

  const nextImage = () => {
    if (activeRoom !== null) {
      setCurrentImage((prev) => (prev + 1) % rooms[activeRoom].gallery.length);
    }
  };

  const prevImage = () => {
    if (activeRoom !== null) {
      setCurrentImage(
        (prev) =>
          (prev - 1 + rooms[activeRoom].gallery.length) %
          rooms[activeRoom].gallery.length
      );
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Luxurious Accommodations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium rooms and
            suites, designed for your ultimate comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div
                  className="relative group cursor-pointer"
                  onClick={() => handleGalleryOpen(index)}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-primary px-6 py-2 rounded-md transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Gallery ({room.gallery.length} photos)
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-playfair font-bold text-primary">
                        {room.title}
                      </h3>
                      <span className="text-2xl font-bold text-primary">
                        {room.price}
                        <span className="text-sm text-gray-500">/night</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {room.size}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {room.occupancy}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{room.description}</p>

                    <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Room Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.slice(0, 6).map((amenity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-gray-600 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-primary mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Buttons fixed at bottom */}
                <div className="mt-6 flex gap-4">
                  <Link to="/book">
                    <button className="flex-1 bg-primary text-white py-3  hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showGallery && activeRoom !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-6xl px-4">
            <button
              onClick={handleGalleryClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative">
              <img
                src={rooms[activeRoom].gallery[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
                className="w-full h-[80vh] object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/75"
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
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/75"
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

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                {currentImage + 1} / {rooms[activeRoom].gallery.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 justify-center">
              {rooms[activeRoom].gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-20 h-20 overflow-hidden rounded-md ${
                    currentImage === idx ? "ring-2 ring-white" : "opacity-50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rooms;
