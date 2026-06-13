import React from "react";

export default function Tech() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Technology Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with leading technology providers to deliver the best solutions for our clients
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Additional Tech Stack Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Our Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Cloud Computing", 
              "Cybersecurity", 
              "Network Infrastructure", 
              "Software Development",
              "Data Analytics",
              "IoT Solutions",
              "Digital Transformation"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}