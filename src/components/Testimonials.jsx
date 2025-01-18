import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Traveler",
      image: "/images/testimonial1.jpg",
      quote: "The best hotel experience I've ever had. Exceptional service and amenities."
    },
    {
      name: "Michael Chen",
      role: "Tourist",
      image: "/images/testimonial2.jpg",
      quote: "Absolutely stunning property with incredible attention to detail."
    }
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Guest Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our guests have to say about their stay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
