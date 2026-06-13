import React, { useState } from "react";
import heroImage from "../assets/hero-image.png";

export default function Hero() {
  const [openDonate, setOpenDonate] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left z-10">

            {/* Badge - Simple Fade In */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 animate-fade-in">
              Empowering Communities Through Technology
            </div>

            {/* Title - Simple Fade In */}
            <h1 className="text-4xl sm:text-5xl text-black mb-6 leading-tight font-bold animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Bridging Traditional Craftsmanship with Modern Digital Opportunity
            </h1>

            {/* Mission - Simple Fade In */}
            <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
              OPTERWA supports artisans and small businesses by providing training, digital tools, and access to global markets.
            </p>

            {/* Description - Simple Fade In */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              We believe every artisan deserves the opportunity to grow, earn sustainably, and showcase their craft to the world through technology.
            </p>

            {/* CTA Buttons - Simple Fade In */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Become a Volunteer
              </a>
            </div>

            {/* Trust line - Simple Fade In */}
            <p className="text-sm text-gray-500 mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Join a growing community creating real impact in artisan communities.
            </p>
          </div>

          {/* RIGHT IMAGE - Simple Fade In */}
          <div className="relative flex justify-center lg:justify-end -mr-8 lg:-mr-16 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <img
              src={heroImage}
              alt="Artisans working with traditional crafts and digital tools"
              className="w-[110%] lg:w-[130%] h-auto rounded-2xl shadow-xl object-contain"
            />
          </div>

        </div>
      </div>

      {/* Simple CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}