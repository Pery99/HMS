import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingPage = () => {
  const navigate = useNavigate()
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: 'deluxe',
    specialRequests: ''
  })

  // Add price calculation
  const calculatePrice = () => {
    const prices = {
      deluxe: 299,
      executive: 249,
      premium: 399
    }
    const basePrice = prices[bookingData.roomType] || 0
    return basePrice
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking Data:', bookingData)
    // Handle form submission
  }

  return (
    <main className="min-h-screen pt-16"> {/* Changed from div to main and adjusted padding */}
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/hotel-images/luxury-room.jpg"
          alt="Luxury Hotel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back to Home Button */}
        <div className="absolute top-8 left-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Booking Form Section */}
            <div className="md:col-span-2">
              <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8">
                <h1 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Book Your Stay
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date Selection with Labels Above */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Check-in Date</label>
                      <input
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Check-out Date</label>
                      <input
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Guest Selection with Icons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center text-gray-700 font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Adults
                      </label>
                      <select
                        value={bookingData.adults}
                        onChange={(e) => setBookingData({...bookingData, adults: parseInt(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Children</label>
                      <select
                        value={bookingData.children}
                        onChange={(e) => setBookingData({...bookingData, children: parseInt(e.target.value)})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {[0, 1, 2, 3].map(num => (
                          <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Room Selection with Images */}
                  <div className="space-y-4">
                    <label className="block text-gray-700 font-medium">Select Your Room</label>
                    <div className="grid gap-4">
                      {['deluxe', 'executive', 'premium'].map((type) => (
                        <label
                          key={type}
                          className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200
                            ${bookingData.roomType === type ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}
                        >
                          <input
                            type="radio"
                            name="roomType"
                            value={type}
                            checked={bookingData.roomType === type}
                            onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
                            className="hidden"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 capitalize">
                              {type.replace('-', ' ')} Suite
                            </h3>
                            <p className="text-sm text-gray-500">
                              Starting from ${calculatePrice()} per night
                            </p>
                          </div>
                          <svg className={`w-6 h-6 ${bookingData.roomType === type ? 'text-primary' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests with Better Styling */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Special Requests</label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 h-32"
                      placeholder="Let us know if you have any special requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 font-medium text-lg"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>

            {/* Summary Card */}
            <div className="md:col-span-1">
              <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Room Type</span>
                    <span className="font-medium text-gray-800 capitalize">{bookingData.roomType} Suite</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-medium text-gray-800">
                      {bookingData.adults} Adults, {bookingData.children} Children
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Price per night</span>
                    <span className="font-medium text-gray-800">${calculatePrice()}</span>
                  </div>
                  <div className="pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-primary">${calculatePrice()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      *Taxes and fees will be calculated at checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BookingPage
