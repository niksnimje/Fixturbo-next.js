"use client"

import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import TopBar from './Topbar';
import Image from 'next/image';
import Navbaarmain from './Navbaar1';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Adjust this value as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const navItems = [
    { name: 'Home', link: '#', submenu: null },
    { 
      name: 'Services', 
      link: '#',
      submenu: [
        { name: 'Auto Diagnostics', link: '#' },
        { name: 'Brake Repair', link: '#' },
        { name: 'Engine Repair', link: '#' },
        { name: 'Oil Change', link: '#' },
      ]
    },
    { 
      name: 'Pages', 
      link: '#',
      submenu: [
        { name: 'About Us', link: '#' },
        { name: 'Our Team', link: '#' },
        { name: 'Pricing Plan', link: '#' },
        { name: 'FAQ', link: '#' },
      ]
    },
    { name: 'Blog', link: '#', submenu: null },
    { name: 'Contact', link: '#', submenu: null },
  ];

  return (
    <>
    <div className="container mx-auto">
        <TopBar />
    </div>
        <Navbaarmain/>
    

      {/* Main Navbar (Fixed on scroll) */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0 bg-theam shadow-md py-2 text-white h-[90px] leading-[80px]' : '-top-full'}`}>
  <div className="container mx-auto px-4 xl:px-0">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-white.svg" alt="Logo" width={130} height={30} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <div className="flex items-center">
              <a 
                href={item.link} 
                className="text-white hover:text-black font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
              {item.submenu && (
                <FiChevronDown 
                  className="ml-1 text-gray-200 group-hover:text-red-600 transition-colors duration-300" 
                />
              )}
            </div>
            {item.submenu && (
              <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                {item.submenu.map((subItem, subIndex) => (
                  <a 
                    key={subIndex} 
                    href={subItem.link}
                    className="block px-4 py-1 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 text-sm"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Social Icons - Desktop */}
      <div className="hidden lg:flex items-center space-x-4">
        <a href="#" className="text-white hover:text-black transition-colors">
          <FaFacebookF size={16} />
        </a>
        <a href="#" className="text-white hover:text-black transition-colors">
          <FaTwitter size={16} />
        </a>
        <a href="#" className="text-white hover:text-black transition-colors">
          <FaInstagram size={16} />
        </a>
        <a href="#" className="text-white hover:text-black transition-colors">
          <FaLinkedinIn size={16} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-black bg-white rounded-md px-2 py-1 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="lg:hidden bg-white shadow-lg rounded-md mt-4 p-2">
        {navItems.map((item, index) => (
          <div key={index} className="mb-1">
            <div 
              className="flex justify-between items-center py-1 px-2 text-black font-medium cursor-pointer"
              onClick={() => item.submenu && toggleSubmenu(index)}
            >
              <a href={item.link} className="block w-full">
                {item.name}
              </a>
              {item.submenu && (
                <FiChevronDown 
                  className={`transition-transform duration-200 ${openSubmenu === index ? 'transform rotate-180' : ''}`}
                />
              )}
            </div>
            {item.submenu && openSubmenu === index && (
              <div className="pl-4 space-y-1">
                {item.submenu.map((subItem, subIndex) => (
                  <a 
                    key={subIndex} 
                    href={subItem.link}
                    className="block py-1 px-2 text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center space-x-6 mt-3">
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    )}
  </div>
</header>
    </>
  );
};

export default Navbar;