import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", section: "home" },
    { name: "Amenities", href: "#amenities", section: "amenities" },
    { name: "Rooms", href: "#rooms", section: "rooms" },
    { name: "Gallery", href: "#gallery", section: "gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = navLinks.map((link) => link.section);
      
      // Check for hero/home section first
      if (scrollPosition < window.innerHeight * 0.5) {
        setActiveSection("home");
        return;
      }

      // Then check other sections
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted threshold to better detect the gallery section
          const threshold = window.innerHeight * 0.3;
          if (rect.top <= threshold && rect.bottom >= threshold) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className={`text-2xl font-playfair font-bold ${
                scrolled ? "text-primary" : "text-white"
              }`}>
                LUXESTAY
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${scrolled 
                      ? "text-gray-600 hover:text-primary" 
                      : "text-white/90 hover:text-white"
                    }
                    ${activeSection === link.section && "nav-active"}
                  `}
                >
                  {link.name}
                  {activeSection === link.section && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 rounded-full ${
                        scrolled ? "bg-primary/10" : "bg-white/10"
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
              <Link
                to="/book"
                className={`ml-4 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${scrolled
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-white/90"}
                `}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Bars3Icon className={`w-6 h-6 ${scrolled ? "text-primary" : "text-white"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <h1 className="text-xl font-playfair font-bold text-primary">LUXESTAY</h1>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto py-6 px-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-lg font-medium border-b border-gray-100
                        ${activeSection === link.section
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary"
                        }
                      `}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="p-6 border-t">
                  <Link
                    to="/book"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3 px-6 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    Book Your Stay
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
