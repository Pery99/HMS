import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'dining', name: 'Dining' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'spa', name: 'Spa & Wellness' },
  ];

  const images = [
    { id: 1, src: '/hotel-images/room1.jpg', category: 'rooms', title: 'Luxury Suite' },
    { id: 2, src: '/hotel-images/dining.jpg', category: 'dining', title: 'Fine Dining' },
    { id: 3, src: '/hotel-images/spa.jpg', category: 'spa', title: 'Spa Treatment' },
    { id: 4, src: '/hotel-images/room2.jpg', category: 'rooms', title: 'Room' },
    { id: 5, src: 'hotel-images/gym.jpg', category: 'amenities', title: 'Gym' },
  ];

  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.category === currentCategory);

  return (
    <section id="gallery" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Experience Luxury
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Take a visual journey through our world-class facilities and experience the epitome of luxury.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${currentCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary/80 hover:bg-primary/10'}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`container-${image.id}`}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium text-lg">{image.title}</h3>
                  <p className="text-white/90 text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl w-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-medium">{selectedImage.title}</h3>
                  <p className="text-white/90 capitalize">{selectedImage.category}</p>
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <button className="text-white hover:text-gray-300 p-2">
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <button className="text-white hover:text-gray-300 p-2">
                    <ArrowRightIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
