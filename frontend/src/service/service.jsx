import React, { useState } from "react";
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
  FaMoneyBillWave,
  FaTimes,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaArrowCircleRight
} from "react-icons/fa";
import Tech from "../component/tech";
import SEO from "../seo/seo";

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
  {
    id: 1,
    title: "Digital Skills & Training",
    icon: FaDesktop,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    gradient: "from-blue-50 to-blue-100/30",
    description: "We train artisans and young creators in digital tools, helping them grow income through technology.",
    fullDescription: "Our comprehensive digital skills training program is designed to bridge the digital divide and empower individuals with practical technology skills. We focus on hands-on learning experiences that directly translate to income-generating opportunities. Through our structured curriculum, participants gain confidence in using digital tools for business, creativity, and personal growth. We've successfully trained over 500 artisans and young creators, with 80% reporting increased income within 3 months of completing our program.",
    features: [
      "Computer & Digital Literacy",
      "Business Digital Skills",
      "Creative Tools Training",
      "Online Market Readiness",
      "Technology Mentorship",
      "Productivity Tools"
    ],
    additionalFeatures: [
      "Personalized learning paths",
      "Industry-recognized certifications",
      "Post-training support & mentoring",
      "Job placement assistance"
    ],
    stats: {
      graduates: "500+",
      satisfaction: "95%",
      incomeIncrease: "80%"
    },
    image: "/images/digital-training.jpg"
  },
  {
    id: 2,
    title: "Digital Business Support",
    icon: FaCode,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    gradient: "from-indigo-50 to-indigo-100/30",
    description: "We help small businesses and artisans build digital presence and reach global markets.",
    fullDescription: "In today's digital economy, having a strong online presence is essential for business success. Our Digital Business Support service provides comprehensive solutions to help small businesses and artisans establish and grow their digital footprint. From website development to e-commerce integration, we handle every aspect of digital transformation. Our team of experts works closely with each client to understand their unique needs and create tailored solutions that drive real business results. We've helped over 200 businesses go digital, with an average revenue increase of 40%.",
    features: [
      "Website Development",
      "Online Store Setup",
      "Brand Identity Design",
      "E-commerce Integration",
      "Business Automation",
      "Digital Strategy"
    ],
    additionalFeatures: [
      "SEO optimization",
      "Social media integration",
      "Analytics & reporting",
      "Ongoing maintenance & support"
    ],
    stats: {
      businesses: "200+",
      revenueIncrease: "40%",
      satisfaction: "98%"
    },
    image: "/images/business-support.jpg"
  },
  {
    id: 3,
    title: "Community Connectivity",
    icon: FaNetworkWired,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    gradient: "from-purple-50 to-purple-100/30",
    description: "We provide digital connectivity solutions to support learning, collaboration, and growth.",
    fullDescription: "Access to reliable internet connectivity is the foundation of digital inclusion. Our Community Connectivity service brings high-quality internet solutions to underserved communities, schools, and digital centers. We design and implement robust network infrastructure that enables learning, collaboration, and economic opportunities. Our solutions are scalable, secure, and tailored to meet the unique needs of each community. We've connected over 50 communities and 100 schools, creating digital hubs that serve as catalysts for local development.",
    features: [
      "Internet Setup for Communities",
      "Local Network Infrastructure",
      "Wi-Fi Access Points",
      "Digital Centers Setup",
      "Secure Connectivity",
      "Remote Collaboration Tools"
    ],
    additionalFeatures: [
      "Community training & support",
      "Network monitoring & maintenance",
      "Affordable pricing models",
      "Solar-powered solutions"
    ],
    stats: {
      communities: "50+",
      schools: "100+",
      users: "10,000+"
    },
    image: "/images/community-connectivity.jpg"
  },
  {
    id: 4,
    title: "Creative & Craft Technology",
    icon: FaPaintBrush,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    gradient: "from-amber-50 to-amber-100/30",
    description: "We merge traditional pottery and craft with modern digital design tools and innovation.",
    fullDescription: "Our Creative & Craft Technology service bridges the gap between traditional artisanal skills and modern digital tools. We help craftspeople and artists enhance their work with cutting-edge technology while preserving cultural heritage. Through our creative innovation labs, artisans learn to use 3D modeling, digital design tools, and modern production techniques. This unique blend of traditional craftsmanship and digital innovation creates new opportunities for artists to reach global markets and create contemporary works. Our program has helped over 150 artisans modernize their craft and increase their income by an average of 60%.",
    features: [
      "Digital Art & Design Tools",
      "3D Craft Visualization",
      "Modern Pottery Techniques",
      "Creative Innovation Labs",
      "Artisan Skill Enhancement",
      "Design Thinking Workshops"
    ],
    additionalFeatures: [
      "Access to modern equipment",
      "Design collaboration platform",
      "Exhibition opportunities",
      "Global market access"
    ],
    stats: {
      artisans: "150+",
      incomeIncrease: "60%",
      satisfaction: "97%"
    },
    image: "/images/craft-tech.jpg"
  },
  {
    id: 5,
    title: "Digital Security & Protection",
    icon: FaServer,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    gradient: "from-green-50 to-green-100/30",
    description: "We ensure safe and secure digital environments for small businesses and community systems.",
    fullDescription: "In an increasingly connected world, digital security is paramount. Our Digital Security & Protection service provides comprehensive cybersecurity solutions for small businesses and community organizations. We offer both education and technical implementation to ensure complete protection. Our team conducts security assessments, implements robust protection measures, and provides ongoing monitoring and support. We've helped over 100 organizations secure their digital assets and have prevented numerous cyber threats through our proactive approach.",
    features: [
      "Cybersecurity Awareness",
      "Data Protection",
      "System Security Setup",
      "Safe Online Practices",
      "Backup Solutions",
      "Secure Cloud Storage"
    ],
    additionalFeatures: [
      "Security audits & assessments",
      "Employee training programs",
      "24/7 threat monitoring",
      "Incident response planning"
    ],
    stats: {
      organizations: "100+",
      threatsPrevented: "1,500+",
      satisfaction: "96%"
    },
    image: "/images/security.jpg"
  },
  {
    id: 6,
    title: "Innovation & AI Support",
    icon: FaCloud,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100",
    gradient: "from-cyan-50 to-cyan-100/30",
    description: "We introduce AI and modern technologies to help communities work smarter and grow faster.",
    fullDescription: "The future belongs to those who embrace innovation. Our Innovation & AI Support service helps communities and businesses leverage the power of artificial intelligence and emerging technologies. We provide practical, accessible solutions that drive efficiency and growth. From AI-powered business tools to smart analytics solutions, we make cutting-edge technology accessible to everyone. Our innovation workshops and training programs have helped over 300 individuals and organizations embrace technology-driven solutions, with many reporting significant improvements in productivity and decision-making.",
    features: [
      "AI Tools for Business",
      "Automation Solutions",
      "Smart Analytics",
      "Digital Assistance Systems",
      "Innovation Workshops",
      "Future Tech Training"
    ],
    additionalFeatures: [
      "Custom AI solutions",
      "Machine learning integration",
      "Data-driven insights",
      "Innovation consulting"
    ],
    stats: {
      individuals: "300+",
      productivityIncrease: "50%",
      satisfaction: "99%"
    },
    image: "/images/innovation.jpg"
  }
];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Modal component
  const ServiceModal = () => {
    if (!selectedService) return null;
    const IconComponent = selectedService.icon;

    const getStatIcon = (label) => {
      const iconMap = {
        graduates: FaUsers,
        satisfaction: FaStar,
        incomeIncrease: FaRocket,
        businesses: FaUsers,
        revenueIncrease: FaRocket,
        communities: FaUsers,
        schools: FaUsers,
        users: FaUsers,
        artisans: FaUsers,
        organizations: FaUsers,
        threatsPrevented: FaLightbulb,
        productivityIncrease: FaRocket,
        individuals: FaUsers
      };
      return iconMap[label] || FaStar;
    };

    const formatStatLabel = (label) => {
      const labelMap = {
        graduates: "Graduates",
        satisfaction: "Satisfaction Rate",
        incomeIncrease: "Average Income Increase",
        businesses: "Businesses Served",
        revenueIncrease: "Average Revenue Growth",
        communities: "Communities Connected",
        schools: "Schools Connected",
        users: "Active Users",
        artisans: "Artisans Supported",
        organizations: "Organizations Protected",
        threatsPrevented: "Threats Prevented",
        productivityIncrease: "Productivity Improvement",
        individuals: "Individuals Trained"
      };
      return labelMap[label] || label.replace(/([A-Z])/g, ' $1').trim();
    };

    return (
      <div 
        className="fixed inset-0 z-50 overflow-y-auto"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        onClick={closeModal}
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
            >
              <FaTimes className="text-gray-600 text-xl" />
            </button>

            {/* Header Section with Icon and Title */}
            <div className={`relative p-6 sm:p-8 ${selectedService.bgColor} rounded-t-3xl border-b ${selectedService.borderColor}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className={`p-4 rounded-2xl bg-white shadow-lg ${selectedService.color}`}>
                  <IconComponent className="text-3xl sm:text-4xl" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{selectedService.title}</h2>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">{selectedService.description}</p>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {/* Full Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
                  Overview
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Statistics */}
              {selectedService.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                  {Object.entries(selectedService.stats).map(([key, value]) => {
                    const StatIcon = getStatIcon(key);
                    return (
                      <div key={key} className={`bg-gradient-to-br ${selectedService.gradient} rounded-xl p-4 text-center border border-gray-100/50 hover:shadow-md transition-shadow duration-300`}>
                        <div className="flex justify-center mb-2">
                          <StatIcon className={`text-xl sm:text-2xl ${selectedService.color}`} />
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-800">{value}</div>
                        <div className="text-xs text-gray-500 mt-1">{formatStatLabel(key)}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Main Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <FaCheckCircle className={`text-sm ${selectedService.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              {selectedService.additionalFeatures && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
                    Additional Services
                  </h3>
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${selectedService.bgColor} rounded-xl p-4`}>
                    {selectedService.additionalFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700 p-1">
                        <FaArrowRight className={`text-sm ${selectedService.color} flex-shrink-0`} />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="flex-1 text-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Started Now
                </a>
                <button
                  onClick={closeModal}
                  className="flex-1 text-center bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Our Services | IT & Technology Solutions in Rwanda"
        description="Explore OPTERWA services including computer repair, networking, CCTV installation, software development, and IT support across Rwanda."
        url="https://opterwa.org/services"
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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive technology solutions tailored to meet your business and personal needs
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across all technology domains
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => openModal(service)}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${service.borderColor} overflow-hidden cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Top accent bar with gradient */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient} transition-all duration-500 group-hover:h-2`}></div>
                  
                  <div className="p-5 sm:p-6">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 ${service.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
                      <div className={`relative z-10 inline-flex p-3 sm:p-4 rounded-xl ${service.bgColor} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-3`}>
                        <IconComponent className={`text-2xl sm:text-3xl ${service.color}`} />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <FaCheckCircle className={`text-xs sm:text-sm ${service.color} flex-shrink-0`} />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* View More Button */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                        <span className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                          Learn More
                        </span>
                        <span className={`inline-flex items-center gap-1 ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1`}>
                          Details
                          <FaArrowRight className="text-xs" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through expertise, reliability, and customer-focused solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Expert Technicians",
                description: "Certified professionals with years of experience",
                icon: FaHeadset,
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                title: "Quick Response",
                description: "Same-day service for urgent requests",
                icon: FaClock,
                color: "text-green-600",
                bgColor: "bg-green-50"
              },
              {
                title: "Affordable Pricing",
                description: "Competitive rates with quality assurance",
                icon: FaMoneyBillWave,
                color: "text-yellow-600",
                bgColor: "bg-yellow-50"
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-gray-200">
                  <div className={`inline-flex p-4 rounded-2xl ${item.bgColor} mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className={`text-2xl sm:text-3xl ${item.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <Tech />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Now
            <FaArrowCircleRight className="text-lg" />
          </a>
        </div>
      </section>

      <Footer />

      {/* Service Modal */}
      {isModalOpen && <ServiceModal />}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Scrollbar Styling */
        .max-h-\[90vh\]::-webkit-scrollbar {
          width: 6px;
        }

        .max-h-\[90vh\]::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .max-h-\[90vh\]::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }

        .max-h-\[90vh\]::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        @media (max-width: 640px) {
          .max-h-\[90vh\] {
            max-height: 95vh;
          }
        }
      `}</style>
    </div>
  );
}