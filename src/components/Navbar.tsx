'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#publications', label: 'Publications' },
    { href: '/#experience', label: 'Experience' },
    // { href: '/#blog', label: 'Blog' }, // 如果有部落格區塊再加回來
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/#home" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 scroll-smooth" onClick={closeMobileMenu}>
          Kevin&apos;s Website
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition duration-300 scroll-smooth"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-600 focus:outline-none z-50"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 border-t border-gray-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition duration-300 scroll-smooth"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
