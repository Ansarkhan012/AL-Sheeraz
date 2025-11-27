import React from 'react';
import { Link } from 'react-router-dom';
import { FaMosque, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <FaMosque size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl leading-none">Al Sheeraz</span>
                <span className="text-xs tracking-widest uppercase text-primary">Islamic Academy</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dedicated to providing high-quality Islamic education with a modern approach. Nurturing hearts and minds for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Our Courses</h3>
            <ul className="space-y-4">
              <li><Link to="/courses/quran-reading" className="text-gray-400 hover:text-primary transition-colors">Quran Reading</Link></li>
              <li><Link to="/courses/tajweed" className="text-gray-400 hover:text-primary transition-colors">Tajweed Rules</Link></li>
              <li><Link to="/courses/hifz" className="text-gray-400 hover:text-primary transition-colors">Quran Memorization</Link></li>
              <li><Link to="/courses/islamic-studies" className="text-gray-400 hover:text-primary transition-colors">Islamic Studies</Link></li>
              <li><Link to="/courses/arabic" className="text-gray-400 hover:text-primary transition-colors">Arabic Language</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <span>Islamic Center,<br />Mansehra,Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-primary" />
                <span>+92 (310) 2073882</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-primary" />
                <span>info@alsheeraz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Al Sheeraz Islamic Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;