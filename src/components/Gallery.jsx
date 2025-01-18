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
      size: "large",
      description: "Our elegant reception welcomes you to luxury",
      location: "Main Building"
    },
    {
      url: "/hotel-images/dining.jpg",
      category: "dining",
      title: "Fine Dining Restaurant",
      size: "medium",
      description: "Experience world-class cuisine",
    },
    {
      url: "/hotel-images/room1.jpg",
      category: "rooms",
      title: "Deluxe Suite",
      size: "medium",
      description: "Ultimate comfort meets luxury",
    },
    {
      url: "/hotel-images/pool.jpg",
      category: "amenities",
      title: "Infinity Pool",
      size: "large",
      description: "Swim with a breathtaking view",
    },
    {
      url: "/hotel-images/dining.jpg",
      category: "dining",
      title: "Skyline Bar",
      size: "medium",
      description: "Cocktails with a view",
    },
    {
      url: "/hotel-images/gym.jpg",
      category: "amenities",
      title: "Fitness Center",
      size: "small",
      description: "State-of-the-art equipment",
    },
  ]

  const categories = [
    { id: "all", label: "All Spaces" },
    { id: "interior", label: "Interior" },
    { id: "rooms", label: "Guest Rooms" },
    { id: "dining", label: "Dining" },
    { id: "amenities", label: "Amenities" }
  ]

  useEffect(() => {
    setFilteredImages(
      activeFilter === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeFilter)
    );
  }, [activeFilter])

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Photo Gallery</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-2">
            Discover Our Spaces
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto my-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2.5 text-sm font-medium tracking-wider transition-all duration-300
                ${activeFilter === cat.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden cursor-pointer
                ${image.size === "large" 
                  ? "col-span-12 md:col-span-8 h-[500px]" 
                  : image.size === "medium"
                  ? "col-span-12 md:col-span-4 h-[400px]"
                  : "col-span-12 md:col-span-4 h-[300px]"}`
              }
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-full group">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs tracking-wider rounded-full mb-3">
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[1200px] w-full mx-auto" onClick={e => e.stopPropagation()}>
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
