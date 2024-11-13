import React, { useState } from 'react';
import { FaLinkedin, FaInfinity, FaInstagram, FaEnvelope, FaPhoneAlt, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
     
      <div className="bg-purple-800 py-2">
        <div className="container mx-auto flex justify-end items-center space-x-4 px-4">
          <a href="#linkedin" className="text-white hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="#website" className="text-white hover:text-gray-300">
            <FaInfinity />
          </a>
          <a href="#instagram" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#email" className="text-white hover:text-gray-300">
            <FaEnvelope />
          </a>
          <a href="#phone" className="text-white hover:text-gray-300">
            <FaPhoneAlt />
          </a>
        </div>
      </div>

    
      <header className="bg-white text-black p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src="../images/theASSignerlogo 2.png" alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">The Assigner</span>
          </div>

          
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-500">Home</a>
            <a href="#about" className="hover:text-gray-500">About Us</a>
            <a href="#blog" className="hover:text-gray-500">Blog</a>
            <a href="#services" className="hover:text-gray-500">Our Services</a>
            <a href="#ielts-pte" className="hover:text-gray-500">IELTS & PTE</a>
            <a href="#contact" className="hover:text-gray-500">Contact Us</a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>

         
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
            Login
          </button>
        </div>

       
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
            <a href="#home" className="block text-black hover:text-gray-500">Home</a>
            <a href="#about" className="block text-black hover:text-gray-500">About Us</a>
            <a href="#blog" className="block text-black hover:text-gray-500">Blog</a>
            <a href="#services" className="block text-black hover:text-gray-500">Our Services</a>
            <a href="#ielts-pte" className="block text-black hover:text-gray-500">IELTS & PTE</a>
            <a href="#contact" className="block text-black hover:text-gray-500">Contact Us</a>
            
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
