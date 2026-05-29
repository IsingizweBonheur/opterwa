import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SEO from "../seo/seo";
import { 
  FaRocket, 
  FaHardHat, 
  FaHandshake, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaTrophy,
  FaImage,
  FaArrowRight
} from "react-icons/fa";

export default function Gallery() {
  const galleryCategories = [
    {
      icon: FaRocket,
      title: "OPTERWA System Launch",
      description: "Official launch event of OPTERWA platform for digital craft transformation",
      count: "5 Photos",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: FaHardHat,
      title: "Artisan Site Visits",
      description: "On-site visits to pottery and craft operations implementing OPTERWA solutions",
      count: "4 Photos",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaHandshake,
      title: "Partner Integration",
      description: "Official integration ceremony with regulatory bodies and partner organizations",
      count: "3 Photos",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaUsers,
      title: "Team & Office",
      description: "Our dedicated team and office facilities",
      count: "4 Photos",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: FaChalkboardTeacher,
      title: "Training & Workshops",
      description: "Training programs and workshops conducted for artisans and stakeholders",
      count: "3 Photos",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaTrophy,
      title: "Awards & Recognition",
      description: "Awards and recognition received for innovation in digital craft transformation",
      count: "2 Photos",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
         <SEO 
        title="Gallery"
        description="Explore OPTERWA's Galley including Infrastructure, Security, IT Solutions, and Pottery Craft Technology."
        url="https://opterwa.com/gallery"
      />
      <Navbar />
      <Navbar />
      
      {/* Hero Section - Matching previous component style */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <FaImage className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Media Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore key moments in our journey of transforming Rwanda's craft sector through innovative digital solutions
          </p>
        </div>
      </section>

      {/* Gallery Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Gallery Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse through key moments and milestones from our journey
            </p>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Image Placeholder with Icon */}
                  <div className={`${category.bgColor} p-8 flex items-center justify-center border-b border-gray-100`}>
                    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-gray-700" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{category.count}</span>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-semibold transition-colors"
                      >
                        View Gallery 
                        <FaArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}