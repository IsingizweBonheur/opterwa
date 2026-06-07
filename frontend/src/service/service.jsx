import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import StructuredData from "../seo/structure";
import { 
  FaDesktop, 
  FaPrint, 
  FaNetworkWired, 
  FaVideo, 
  FaCode,
  FaCheckCircle,
  FaPaintBrush,
  FaServer,
  FaCloud,
  FaHeadset,
  FaClock,
  FaMoneyBillWave
} from "react-icons/fa";
import Tech from "../component/tech";
import SEO from "../seo/seo";

export default function Service() {
  const services = [
  {
    id: 1,
    title: "Digital Skills & Training",
    icon: FaDesktop,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    description:
      "We train artisans and young creators in digital tools, helping them grow income through technology.",
    features: [
      "Computer & Digital Literacy",
      "Business Digital Skills",
      "Creative Tools Training",
      "Online Market Readiness",
      "Technology Mentorship",
      "Productivity Tools"
    ]
  },
  {
    id: 2,
    title: "Digital Business Support",
    icon: FaCode,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    description:
      "We help small businesses and artisans build digital presence and reach global markets.",
    features: [
      "Website Development",
      "Online Store Setup",
      "Brand Identity Design",
      "E-commerce Integration",
      "Business Automation",
      "Digital Strategy"
    ]
  },
  {
    id: 3,
    title: "Community Connectivity",
    icon: FaNetworkWired,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    description:
      "We provide digital connectivity solutions to support learning, collaboration, and growth.",
    features: [
      "Internet Setup for Communities",
      "Local Network Infrastructure",
      "Wi-Fi Access Points",
      "Digital Centers Setup",
      "Secure Connectivity",
      "Remote Collaboration Tools"
    ]
  },
  {
    id: 4,
    title: "Creative & Craft Technology",
    icon: FaPaintBrush,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    description:
      "We merge traditional pottery and craft with modern digital design tools and innovation.",
    features: [
      "Digital Art & Design Tools",
      "3D Craft Visualization",
      "Modern Pottery Techniques",
      "Creative Innovation Labs",
      "Artisan Skill Enhancement",
      "Design Thinking Workshops"
    ]
  },
  {
    id: 5,
    title: "Digital Security & Protection",
    icon: FaServer,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    description:
      "We ensure safe and secure digital environments for small businesses and community systems.",
    features: [
      "Cybersecurity Awareness",
      "Data Protection",
      "System Security Setup",
      "Safe Online Practices",
      "Backup Solutions",
      "Secure Cloud Storage"
    ]
  },
  {
    id: 6,
    title: "Innovation & AI Support",
    icon: FaCloud,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-100",
    description:
      "We introduce AI and modern technologies to help communities work smarter and grow faster.",
    features: [
      "AI Tools for Business",
      "Automation Solutions",
      "Smart Analytics",
      "Digital Assistance Systems",
      "Innovation Workshops",
      "Future Tech Training"
    ]
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     <SEO
  title="Our Services | IT & Technology Solutions in Rwanda"
  description="Explore OPTERWA services including computer repair, networking, CCTV installation, software development, and IT support across Rwanda."
  url="https://opterwa.com/services"
  keywords="
    IT services Rwanda,
    computer repair Kigali,
    networking services Rwanda,
    CCTV installation Rwanda,
    software development Rwanda,
    tech support Kigali,
    OPTERWA services
  "
/>
      <StructuredData />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business and personal needs
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across all technology domains
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${service.borderColor} overflow-hidden cursor-pointer`}
                >
                  {/* Top accent bar */}
                  <div className={`h-1 w-full ${service.bgColor} transition-all duration-500 group-hover:h-1.5`}></div>
                  
                  <div className="p-6">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 ${service.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
                      <div className={`relative z-10 inline-flex p-4 rounded-xl ${service.bgColor} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                        <IconComponent className={`text-3xl ${service.color}`} />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <FaCheckCircle className={`text-xs ${service.color} flex-shrink-0`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through expertise, reliability, and customer-focused solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Technicians",
                description: "Certified professionals with years of experience",
                icon: FaHeadset,
                color: "text-blue-600"
              },
              {
                title: "Quick Response",
                description: "Same-day service for urgent requests",
                icon: FaClock,
                color: "text-green-600"
              },
              {
                title: "Affordable Pricing",
                description: "Competitive rates with quality assurance",
                icon: FaMoneyBillWave,
                color: "text-yellow-600"
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-500 group border border-gray-100">
                  <div className={`inline-flex p-4 rounded-2xl bg-gray-100 mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className={`text-3xl ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <Tech />

      {/* CTA Section */}
      <section className="bg-blue-900 py-19">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Now
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