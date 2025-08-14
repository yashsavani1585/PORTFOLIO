import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    const headerOffset = 80; 
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); 
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contacts", id: "hireme" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 md:px-20 py-4 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="font-bold text-xl md:text-2xl">YASH SAVANI</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>

 
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>

    
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white bg-opacity-95 backdrop-blur-md w-full absolute top-full left-0">
          <div className="flex flex-col items-center py-6 space-y-4 text-lg font-medium">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
