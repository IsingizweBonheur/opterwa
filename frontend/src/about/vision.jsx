import React from "react";
import { FaRocket, FaLightbulb, FaChartLine, FaUsers, FaGlobe, FaHandsHelping, FaLightbulb as FaInnovation, FaShieldAlt, FaHandshake, FaLeaf, FaTrophy, FaUserPlus } from "react-icons/fa";

export default function Vision() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tagline */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Pioneering Rwanda's Digital Craft Revolution</span>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Mission Card - Left */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8 lg:left-8">
                {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full">
                  <FaRocket className="w-6 h-6 text-indigo-600" />
                </div> */}
              </div>
              <div className="mt-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <div className="w-16 h-1 bg-indigo-600 rounded-full mb-6"></div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To empower Rwandan businesses and artisans by providing innovative technology solutions that bridge traditional craftsmanship with digital transformation, fostering sustainable growth and preserving cultural heritage.
                </p>
                <span className="inline-block bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                  Digital empowerment for all businesses
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 md:p-10 text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Why Mission Matters</h3>
              <p className="text-indigo-700">
                Bridging tradition with technology to create lasting impact for Rwandan artisans and businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card - Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-10 text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Our Future Focus</h3>
              <p className="text-purple-700">
                Setting new standards for technological advancement across East Africa by 2030.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-10 border border-indigo-100 hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 right-8 lg:right-8">
                {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                  <FaLightbulb className="w-6 h-6 text-purple-600" />
                </div> */}
              </div>
              <div className="mt-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <div className="w-16 h-1 bg-purple-600 rounded-full mb-6"></div>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  To become Rwanda's leading integrated technology partner, recognized for transforming traditional industries through innovative digital solutions while setting new standards for sustainable technological advancement in East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                <FaInnovation className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously innovate to create cutting-edge solutions that address real-world challenges in the informal sector.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                <FaShieldAlt className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate with the highest standards of honesty, transparency, and ethical conduct in all our business practices.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                <FaHandshake className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in working together with stakeholders, clients, and partners to achieve mutual success and sustainable growth.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                <FaLeaf className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to creating solutions that promote long-term sustainability and positive impact on communities and the environment.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                <FaTrophy className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in everything we do, delivering high-quality solutions that exceed our clients' expectations.
              </p>
            </div>

            {/* Empowerment */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                <FaUserPlus className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                We empower individuals and businesses in the informal sector by providing them with tools and opportunities for growth and formalization.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Pillars Section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Strategic Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-7 h-7 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Business Empowerment</h4>
              <p className="text-gray-600">
                Equipping Rwandan businesses and artisans with cutting-edge digital tools and training to thrive in the modern economy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="w-7 h-7 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h4>
              <p className="text-gray-600">
                Bridging traditional craftsmanship with innovative technology solutions that preserve cultural heritage while enabling growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-7 h-7 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainable Growth</h4>
              <p className="text-gray-600">
                Fostering long-term economic development through technology that benefits communities across East Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}