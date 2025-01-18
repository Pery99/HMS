import React, { useState, useEffect } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredImages, setFilteredImages] = useState([])

  const galleryImages = [
    {
      url: '/hotel-images/reception.jpg',
      category: 'interior',
      title: 'Luxurious Lobby',
      size: 'large', // large image
      description: 'Our grand reception area welcomes you to luxury'
    },
    {
      url: '/hotel-images/dining.jpg',
      category: 'dining',
      title: 'Fine Dining Restaurant',
      size: 'medium',
      description: 'Experience world-class cuisine'
    },
    {
      url: '/hotel-images/room1.jpg',
      category: 'rooms',
      title: 'Deluxe Suite',
      size: 'medium',
      description: 'Ultimate comfort meets luxury'
    },
    {
      url: '/hotel-images/pool.jpg',
      category: 'amenities',
      title: 'Infinity Pool',
      size: 'large',
      description: 'Swim with a breathtaking view'
    },
    {
      url: '/hotel-images/dining.jpg',
      category: 'dining',
      title: 'Skyline Bar',
      size: 'medium',
      description: 'Cocktails with a view'
    },
    {
      url: '/hotel-images/gym.jpg',
      category: 'amenities',
      title: 'Fitness Center',
      size: 'small',
      description: 'State-of-the-art equipment'
    }
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'interior', label: 'Interior' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'dining', label: 'Dining' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'wellness', label: 'Wellness' }
  ]

  useEffect(() => {
    setFilteredImages(
      activeFilter === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter)
    )
  }, [activeFilter])

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Explore Our Hotel
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Take a visual journey through our luxurious facilities and experience the epitome of comfort.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-xl overflow-hidden
                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  image.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
              `}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-full">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-primary/80 text-white text-sm rounded-full mb-3">
                      {categories.find(cat => cat.id === image.category)?.label}
                    </span>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="inline-block px-3 py-1 bg-primary/80 text-white text-sm rounded-full mb-3">
                  {categories.find(cat => cat.id === selectedImage.category)?.label}
                </span>
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
