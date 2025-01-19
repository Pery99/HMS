import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // You'll need to install framer-motion

const BookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    roomType: "deluxe",
    specialRequests: "",
  });

  // Add new state for guest details
  const [guestDetails, setGuestDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    specialRequests: "",
  });

  const steps = [
    { number: 1, title: "Select Dates" },
    { number: 2, title: "Choose Room" },
    { number: 3, title: "Guest Details" },
    { number: 4, title: "Confirm Booking" },
  ];

  // Add price calculation
  const calculatePrice = () => {
    const prices = {
      deluxe: 299,
      executive: 249,
      premium: 399,
    };
    const basePrice = prices[bookingData.roomType] || 0;
    return basePrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", bookingData);
    // Handle form submission
  };

  const roomTypes = [
    {
      type: "deluxe",
      title: "Deluxe Ocean Suite",
      image: "/hotel-images/room1.jpg",
      price: 299,
      features: [
        "Ocean View Balcony",
        "King-size bed",
        "Rain Shower",
        "Room Service",
      ],
    },
    {
      type: "executive",
      title: "Executive Business Suite",
      image: "/hotel-images/room2.jpg",
      price: 249,
      features: [
        "City View",
        "Work Desk",
        "Queen-size bed",
        "Executive Lounge Access",
      ],
    },
    {
      type: "premium",
      title: "Premium Family Suite",
      image: "/hotel-images/room3.jpg",
      price: 399,
      features: [
        "Private Terrace",
        "Two King-size beds",
        "Living Room",
        "Kitchenette",
      ],
    },
  ];

  const renderRoomSelection = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
        Select Your Room
      </h3>
      <div className="space-y-4">
        {roomTypes.map((room) => (
          <label
            key={room.type}
            className={`relative flex p-6 border rounded-xl cursor-pointer transition-all duration-200
              ${
                bookingData.roomType === room.type
                  ? "border-primary bg-primary/5"
                  : "border-gray-200"
              }
            `}
          >
            <input
              type="radio"
              name="roomType"
              value={room.type}
              checked={bookingData.roomType === room.type}
              onChange={(e) =>
                setBookingData({ ...bookingData, roomType: e.target.value })
              }
              className="hidden"
            />
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 flex justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {room.title}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">
                    ${room.price}
                  </span>
                  <p className="text-sm text-gray-500">per night</p>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
      <div className="flex justify-between pt-6">
        <button
          onClick={() => setStep(1)}
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Continue to Guest Details
        </button>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/hotel-images/luxury-room.jpg"
          alt="Luxury Hotel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-black/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-6 pb-12 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </button>
            <h1 className="text-2xl font-playfair font-bold text-white">
              Book Your Stay
            </h1>
          </div>
        </header>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8 px-4">
          <div className="flex justify-between">
            {steps.map((s, i) => (
              <div key={s.number} className="flex-1 relative">
                <div
                  className={`
                  flex flex-col items-center
                  ${
                    i !== steps.length - 1
                      ? 'after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-gray-300 after:top-5 after:left-1/2 after:-z-10'
                      : ""
                  }
                `}
                >
                  <div
                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                    ${
                      step >= s.number
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-400"
                    }
                  `}
                  >
                    {s.number}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      step >= s.number ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Booking Form */}
            <div className="md:col-span-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            checkIn: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            checkOut: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center text-gray-700 font-medium">
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Adults
                      </label>
                      <select
                        value={bookingData.adults}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            adults: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} Adult{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Children
                      </label>
                      <select
                        value={bookingData.children}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            children: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num}>
                            {num} Child{num !== 1 ? "ren" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Room Selection */}
              {step === 2 && renderRoomSelection()}

              {/* Step 3: Guest Details */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                    Guest Information
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={guestDetails.firstName}
                        onChange={(e) =>
                          setGuestDetails({
                            ...guestDetails,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={guestDetails.lastName}
                        onChange={(e) =>
                          setGuestDetails({
                            ...guestDetails,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={guestDetails.email}
                        onChange={(e) =>
                          setGuestDetails({
                            ...guestDetails,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={guestDetails.phone}
                        onChange={(e) =>
                          setGuestDetails({
                            ...guestDetails,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={guestDetails.specialRequests}
                      onChange={(e) =>
                        setGuestDetails({
                          ...guestDetails,
                          specialRequests: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                      placeholder="Any special requests or preferences..."
                    />
                  </div>
                  <div className="flex justify-between pt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                      Review Booking
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirm Booking */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                    Review Your Booking
                  </h3>

                  <div className="space-y-6">
                    {/* Stay Details */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Stay Details
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Check-in</p>
                          <p className="font-medium">{bookingData.checkIn}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Check-out</p>
                          <p className="font-medium">{bookingData.checkOut}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Guests</p>
                          <p className="font-medium">
                            {bookingData.adults} Adults, {bookingData.children}{" "}
                            Children
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Room Type</p>
                          <p className="font-medium capitalize">
                            {bookingData.roomType} Suite
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Guest Details */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Guest Information
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Name</p>
                          <p className="font-medium">
                            {guestDetails.firstName} {guestDetails.lastName}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Email</p>
                          <p className="font-medium">{guestDetails.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Phone</p>
                          <p className="font-medium">{guestDetails.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      onClick={() => setStep(3)}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Booking Summary */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 h-fit sticky top-8">
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-6">
                Booking Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Room Type</span>
                  <span className="font-medium text-gray-800 capitalize">
                    {bookingData.roomType} Suite
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Guests</span>
                  <span className="font-medium text-gray-800">
                    {bookingData.adults} Adults, {bookingData.children} Children
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Price per night</span>
                  <span className="font-medium text-gray-800">
                    ${calculatePrice()}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${calculatePrice()}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    *Final price includes taxes and fees
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
