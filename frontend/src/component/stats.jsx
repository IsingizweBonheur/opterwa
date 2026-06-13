import React from "react";
import { 
  FaProjectDiagram, 
  FaChalkboardTeacher, 
  FaMicrochip, 
  FaLightbulb,
  FaUsers,
  FaTrophy,
  FaSearch,
  FaChartLine,
  FaCogs,
  FaHeadset
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      number: "80+",
      label: "Projects Completed",
      description: "Successful tech implementations",
      icon: FaProjectDiagram,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      number: "350+",
      label: "Artisans Trained",
      description: "Skilled pottery craftspeople",
      icon: FaChalkboardTeacher,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      number: "25",
      label: "Technology Solutions",
      description: "Innovative digital tools",
      icon: FaMicrochip,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      number: "2+",
      label: "Years Innovation",
      description: "Industry leadership",
      icon: FaLightbulb,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      number: "200+",
      label: "Happy Clients",
      description: "Satisfied businesses & artisans",
      icon: FaUsers,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      number: "2+",
      label: "Industry Awards",
      description: "Recognition for excellence",
      icon: FaTrophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const bridgeSteps = [
    {
      title: "Digital Assessment",
      description: "Analyze current technology infrastructure and pottery processes to identify digital transformation opportunities.",
      icon: FaSearch,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Integrated Planning",
      description: "Create customized solutions that blend IT systems with pottery production workflows for maximum efficiency.",
      icon: FaChartLine,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Implementation",
      description: "Deploy technology solutions while training artisans on modern tools and sustainable manufacturing methods.",
      icon: FaCogs,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {

      title: "Continuous Support",
      description: "Provide ongoing technical support, maintenance, and innovation updates for both IT and pottery operations.",
      icon: FaHeadset,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Achievements & Impact 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming businesses and empowering artisans through innovative technology solutions
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-full ${stat.bgColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className={`text-3xl ${stat.color}`} />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How We Bridge Technology & Craft Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Bridge Technology & Craft
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A unique approach that combines modern IT expertise with traditional pottery craftsmanship
            </p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bridgeSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="p-6 text-center">
                    
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-full ${step.bgColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className={`text-2xl ${step.color}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}