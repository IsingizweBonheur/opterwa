import React from "react";
import { 
  FaLightbulb, 
  FaShieldAlt, 
  FaMedal, 
  FaHandshake, 
  FaLeaf,
  FaHeart,
  FaUsers,
  FaChartLine,
  FaRocket
} from "react-icons/fa";

export default function Values() {
  const values = [
    {
      name: "Innovation",
      icon: FaLightbulb,
      description: "Embracing cutting-edge technology to create transformative solutions",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      name: "Integrity",
      icon: FaShieldAlt,
      description: "Operating with honesty, transparency, and ethical practices",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Excellence",
      icon: FaMedal,
      description: "Delivering high-quality solutions that exceed expectations",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      name: "Collaboration",
      icon: FaHandshake,
      description: "Building strong partnerships with clients and stakeholders",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      name: "Sustainability",
      icon: FaLeaf,
      description: "Creating lasting impact through responsible technology",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      name: "Customer-Centric",
      icon: FaHeart,
      description: "Putting our clients' needs first in everything we do",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at OPTERWA
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Values Grid - Now with 6 items (2 rows of 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${value.borderColor} overflow-hidden`}
              >
                <div className="p-6 text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-full ${value.bgColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className={`text-4xl ${value.color}`} />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}