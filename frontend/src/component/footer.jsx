import React from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaYoutube,
  FaClock,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="OPTERWA Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/48x48?text=OPTERWA";
                }}
              />
              <h3 className="text-2xl font-bold">OPTERWA</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Bridging traditional craftsmanship with modern technology solutions for potters and artisans worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href={`/${item.toLowerCase().replace(" ", "")}`} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {["Infrastructure", "Security", "IT Solutions", "Pottery Craft"].map((item, index) => (
                <li key={index}>
                  <a href={`/services#${item.toLowerCase().replace(" ", "-")}`} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Using React Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-indigo-400 text-lg flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-400 text-lg flex-shrink-0" />
                <span className="text-gray-300 text-sm">+250 788 231 302</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-400 text-lg flex-shrink-0" />
                <span className="text-gray-300 text-sm">info.opterwa@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-indigo-400 text-lg flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} OPTERWA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}