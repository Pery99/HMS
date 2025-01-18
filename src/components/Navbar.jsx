import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Rooms', href: '#rooms', section: 'rooms' },
    { name: 'Gallery', href: '#gallery', section: 'gallery' },
    { name: 'Amenities', href: '#amenities', section: 'amenities' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.section)
      
      // Check for hero/home section first
      if (scrollPosition < window.innerHeight * 0.5) {
        setActiveSection('home')
        return
      }

      // Then check other sections
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    // Initialize active section
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}>
                Logo/Name
              </h1>
            </div>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
                      ${scrolled ? 
                        'text-gray-600 hover:text-primary' : 
                        'text-gray-200 hover:text-white'
                      }
                      ${activeSection === link.section ? 
                        (scrolled ? 'text-primary' : 'text-white') + ' border-b-2 border-current' : 
                        ''
                      }
                    `}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className={`hidden md:block px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105
              ${scrolled ? 
                'bg-primary text-white hover:bg-opacity-90' : 
                'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}>
              Book Now
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden rounded-md p-2 transition-colors duration-300 ${
                scrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50
                ${activeSection === link.section ? 'text-primary bg-gray-50' : ''}
              `}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-2 px-3 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
