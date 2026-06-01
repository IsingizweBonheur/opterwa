import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SEO from "../seo/seo";
import Vision from  "./vision";
import Leader from "./leader";
import { FaUsers, FaRocket, FaGlobe, FaTrophy, FaChartLine, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="About Us"
        description="Learn about OPTERWA's mission to bridge technology and pottery craft, empowering artisans and businesses through innovative solutions."
        url="https://opterwa.com/about"
      /> 
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About OPTERWA
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging traditional craftsmanship with modern technology solutions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-indigo-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                OPTERWA began its journey as <span className="font-semibold text-indigo-600">APFERWA</span> in <span className="font-semibold">March 2024</span>, 
                founded with a vision to transform practical skills development through technology. 
                After months of dedicated service and growth, we evolved and rebranded to <span className="font-semibold text-indigo-600">OPTERWA</span> 
                in <span className="font-semibold">July 2025</span>, marking a new chapter in our mission to empower individuals through technology-driven practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a <span className="font-semibold text-indigo-600">non-governmental organization (NGO)</span>, OPTERWA is dedicated to helping individuals and students 
                enhance their practical skills through innovative technology-driven practices. We focus on providing 
                hands-on learning experiences, utilizing the latest technological advancements to ensure our participants 
                gain valuable, real-world skills that prepare them for success in today's tech-driven world.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a student looking to supplement your education or an individual seeking to upskill, 
                our programs are designed to empower you with the knowledge and tools you need to thrive. 
                From bridging traditional craftsmanship with modern technology to offering cutting-edge IT training, 
                OPTERWA is committed to creating opportunities and transforming lives through education and innovation.
              </p>
            </div>
            
            {/* Image Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/our-story-image.jpg" 
                  alt="OPTERWA team working on technology solutions" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm font-medium">From APFERWA (March 2024) to OPTERWA (July 2025) — Empowering skills through technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <Vision />
       <Leader />
      {/* CTA Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Be part of our mission to bridge technology and craftsmanship
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
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