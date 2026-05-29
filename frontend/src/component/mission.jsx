import React from "react";
import { FaEye, FaBullseye, FaStar, FaRocket, FaCheckCircle, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";

export default function Mission() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving innovation and empowering artisans through technology
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Mission Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 group-hover:w-2 transition-all duration-300"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 rounded-full">
                  <FaBullseye className="text-3xl text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower businesses and artisans by delivering innovative, 
                reliable, and sustainable technology solutions that bridge 
                traditional craftsmanship with modern digital tools.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-indigo-600">
                  <FaStar className="text-sm" />
                  <span className="text-sm font-medium">Excellence in every solution</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <FaCheckCircle className="text-sm" />
                  <span className="text-sm font-medium">Client-centric approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 group-hover:w-2 transition-all duration-300"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-50 rounded-full">
                  <FaEye className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                To become a global leader in technology innovation, transforming 
                the pottery craft industry and beyond by creating a connected 
                ecosystem where tradition meets cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-purple-600">
                  <FaRocket className="text-sm" />
                  <span className="text-sm font-medium">Innovation without boundaries</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <FaGlobe className="text-sm" />
                  <span className="text-sm font-medium">Global impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Why Choose OPTERWA?
            </h3>
            <p className="text-gray-600">Commitment to excellence in everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaChartLine,
                title: "Proven Track Record",
                description: "80+ successful projects delivered with measurable results",
                color: "text-green-600",
                bgColor: "bg-green-50"
              },
              {
                icon: FaUsers,
                title: "Expert Team",
                description: "Skilled professionals dedicated to your success",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: FaStar,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes",
                color: "text-amber-600",
                bgColor: "bg-amber-50"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className={`inline-flex p-3 rounded-full ${item.bgColor} mb-4`}>
                    <IconComponent className={`text-2xl ${item.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}