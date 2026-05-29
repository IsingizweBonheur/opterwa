import { 
  FaServer,
  FaShieldAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaPlug,
  FaUserShield,
  FaCode
} from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background pattern - matching Good Link style */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">

            {/* Main Heading - Single h1 with black text */}
            <h1 className="text-5xl text-black mb-6 leading-tight">
              Welcome to OPTERWA
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-semibold">
              Empowering Business & Pottery Craft Through Technology
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Delivering comprehensive Infrastructure, Security, IT Solutions, 
              and innovative Pottery Craft technology to drive creativity and business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transform hover:-translate-y-0.5"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Column: Core Services - Now with 4 services */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { 
                name: "Infrastructure", 
                icon: FaServer, 
                color: "text-blue-600",
                hoverColor: "hover:border-blue-200 hover:shadow-blue-100",
                description: "Networking & Cloud Computing",
                details: ["Network Setup", "Cloud Solutions", "Data Centers"]
              },
              { 
                name: "Security", 
                icon: FaShieldAlt, 
                color: "text-green-600",
                hoverColor: "hover:border-green-200 hover:shadow-green-100",
                description: "CCTV & Protection Systems",
                details: ["CCTV Installation", "Access Control", "Cybersecurity"]
              },
              { 
                name: "IT Solutions", 
                icon: FaLaptopCode, 
                color: "text-purple-600",
                hoverColor: "hover:border-purple-200 hover:shadow-purple-100",
                description: "Software & Technical Support",
                details: ["Software Dev", "Printer Repair", "IT Support"]
              },
              { 
                name: "Pottery Craft", 
                icon: FaPaintBrush, 
                color: "text-amber-600",
                hoverColor: "hover:border-amber-200 hover:shadow-amber-100",
                description: "Innovative Ceramic Technology",
                details: ["Smart Kilns", "3D Pottery Design", "Digital Art Tools"]
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-lg shadow-md transition-all duration-300 border border-gray-100 ${service.hoverColor} cursor-pointer`}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Icon without background */}
                      <div className="flex-shrink-0">
                        <IconComponent className={`text-4xl ${service.color} transition-transform duration-300 group-hover:scale-110`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        
                        {/* Service details as simple text without spans */}
                        <div className="text-xs text-gray-500">
                          {service.details.join(" • ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}