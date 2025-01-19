import React, { useState, useEffect } from "react"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredImages, setFilteredImages] = useState([])

  const galleryImages = [
    {
      url: "/hotel-images/reception.jpg",
      category: "interior",
      title: "Grand Reception",
      size: "tall",
      featured: true,
      description: "Our elegant reception welcomes you to luxury"
    },
    {
      url: "/hotel-images/dining.jpg",
      category: "dining",
      title: "Fine Dining Restaurant",
      size: "wide",
      featured: true,
      description: "Experience world-class cuisine"
    },
    {
      url: "/hotel-images/room1.jpg",
      category: "rooms",
      title: "Deluxe Suite",
      size: "standard",
      featured: true,
      description: "Ultimate comfort meets luxury"
    },
    {
      url: "/hotel-images/room2.jpg",
      category: "rooms",
      title: "Executive Suite",
      size: "wide",
      description: "Perfect for business travelers"
    },
    {
      url: "/hotel-images/room3.jpg",
      category: "rooms",
      title: "Family Suite",
      size: "tall",
      description: "Spacious comfort for families"
    },
    {
      url: "/hotel-images/pool.jpg",
      category: "amenities",
      title: "Infinity Pool",
      size: "wide",
      featured: true,
      description: "Swim with a breathtaking view"
    },
    {
      url: "/hotel-images/gym.jpg",
      category: "amenities",
      title: "Fitness Center",
      size: "standard",
      description: "State-of-the-art equipment"
    },
    {
      url: "/hotel-images/spa.jpg",
      category: "amenities",
      title: "Spa & Wellness",
      size: "tall",
      description: "Relax and rejuvenate"
    }
  ]

  const categories = [
    { id: "all", label: "All Photos", count: galleryImages.length },
    { id: "interior", label: "Interior", count: galleryImages.filter(img => img.category === "interior").length },
    { id: "rooms", label: "Rooms", count: galleryImages.filter(img => img.category === "rooms").length },
    { id: "dining", label: "Dining", count: galleryImages.filter(img => img.category === "dining").length },
    { id: "amenities", label: "Amenities", count: galleryImages.filter(img => img.category === "amenities").length }
  ]

  useEffect(() => {
    setFilteredImages(
      activeFilter === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter)
    )
  }, [activeFilter])

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mt-2">
            Captured Moments
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto my-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300
                ${activeFilter === cat.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                rounded-md
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - New Layout */}
        <div className="grid grid-cols-12 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group cursor-pointer overflow-hidden rounded-lg
                ${image.size === 'wide' 
                  ? 'col-span-12 md:col-span-8 aspect-[16/9]' 
                  : image.size === 'tall'
                  ? 'col-span-12 md:col-span-4 aspect-[3/4]'
                  : 'col-span-12 md:col-span-4 aspect-square'}
                ${index === 0 ? 'md:col-span-8 aspect-[16/9]' : ''}
                transform transition-transform duration-300 hover:-translate-y-1
              `}
            >
              <div className="relative h-full w-full">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 bg-primary/80 text-white text-xs rounded-md mb-2">
                      {categories.find(cat => cat.id === image.category)?.label}
                    </span>
                    <h3 className="text-xl text-white font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-sm font-medium">Close Gallery</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-black/30 rounded-lg overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-8 bg-gradient-to-t from-black/90 to-transparent">
                <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs tracking-wider rounded-full mb-3">
                  {categories.find(cat => cat.id === selectedImage.category)?.label}
                </span>
                <h3 className="text-3xl font-playfair font-bold text-white mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 max-w-2xl">
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
