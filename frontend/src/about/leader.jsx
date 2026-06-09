import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Leader() {
  const leaders = [
    {
      initials: "JH",
      name: "HATEGEKIMANA Joseph",
      title: "Chief Executive Officer",
      description: "Founder and CEO of OPTERWA, Joseph leads the organization's strategic vision and growth. With a passion for bridging technology and traditional craftsmanship, he is committed to empowering Rwandan artisans and businesses through innovative digital solutions.",
      gradient: "from-indigo-500 to-indigo-600",
      initialBg: "from-indigo-100 to-indigo-200",
      initialColor: "text-indigo-600",
      titleColor: "text-indigo-600",
      hoverColor: "hover:bg-indigo-50"
    }
    // {
    //   initials: "IB",
    //   name: "DUSHIME ISINGIZWE Bonheur",
    //   title: "IT Director",
    //   description: "As IT Director, Bonheur oversees the technical infrastructure and digital innovation at OPTERWA. He leads the development of cutting-edge technology solutions that transform traditional industries and create sustainable digital ecosystems for businesses across Rwanda.",
    //   gradient: "from-indigo-500 to-indigo-600",
    //   initialBg: "from-indigo-100 to-indigo-200",
    //   initialColor: "text-indigo-600",
    //   titleColor: "text-indigo-600",
    //   hoverColor: "hover:bg-indigo-50"
    // }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Matching Good Link Solutions style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Meet the visionaries driving our mission forward
          </p>
        </div>

        {/* Leadership Grid - 2 Leaders centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1 - HATEGEKIMANA Joseph */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            {/* Initials Circle - Matching Good Link style */}
            <div className="flex justify-center mb-4">
              <div className={`w-24 h-24 bg-gradient-to-br ${leaders[0].initialBg} rounded-full flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${leaders[0].initialColor}`}>{leaders[0].initials}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {leaders[0].name}
            </h3>
            <p className={`${leaders[0].titleColor} font-medium text-sm mb-4`}>
              {leaders[0].title}
            </p>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {leaders[0].description}
            </p>
          </div>

          {/* Card 2 - DUSHIME ISINGIZWE Bonheur */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            {/* Initials Circle */}
            <div className="flex justify-center mb-4">
              <div className={`w-24 h-24 bg-gradient-to-br ${leaders[1].initialBg} rounded-full flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${leaders[1].initialColor}`}>{leaders[1].initials}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {leaders[1].name}
            </h3>
            <p className={`${leaders[1].titleColor} font-medium text-sm mb-4`}>
              {leaders[1].title}
            </p>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {leaders[1].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
