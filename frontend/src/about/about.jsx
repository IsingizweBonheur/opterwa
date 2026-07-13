import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SEO from "../seo/seo";
import Vision from "./vision";
import Leader from "./leader";
import Trust from "../testimonial/trust";
import StructuredData from "../seo/structure";
import Partner from "../testimonial/partener";
import {
  FaHandsHelping,
  FaGlobe,
  FaLightbulb,
  FaCalendarAlt,
  FaRocket
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      <SEO
  title="About OPTERWA | Technology NGO in Rwanda"
  description="Learn about OPTERWA, a Rwanda-based NGO empowering communities through technology training, digital innovation, and artisan support programs."
  url="https://opterwa.org/about"
  keywords="
    about OPTERWA,
    NGO Rwanda technology,
    tech NGO Kigali,
    digital skills Rwanda,
    OPTERWA mission,
    artisan technology Rwanda
  "
/>

      <StructuredData />
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-900 text-white pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About OPTERWA</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Empowering artisans and communities through technology and innovation.
        </p>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">Why We Exist</h2>

          <p className="text-gray-600 mb-12">
            We bridge the gap between traditional craftsmanship and modern technology
            by giving artisans access to skills, tools, and global markets.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FaHandsHelping className="text-indigo-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Community First</h3>
              <p className="text-gray-500 text-sm">People before technology.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FaGlobe className="text-indigo-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Global Access</h3>
              <p className="text-gray-500 text-sm">Connecting local to global markets.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FaLightbulb className="text-indigo-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Innovation</h3>
              <p className="text-gray-500 text-sm">Technology solving real problems.</p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">

              <p>
                OPTERWA began its journey as <span className="font-semibold text-indigo-600">APFERWA</span> in March 2024,
                founded with a vision to transform practical skills development through technology.
                After months of dedicated service and growth, we evolved and rebranded to
                <span className="font-semibold text-indigo-600"> OPTERWA</span> in July 2025,
                marking a new chapter in our mission to empower individuals through technology-driven practices.
              </p>

              <p>
                As a non-governmental organization (NGO), OPTERWA is dedicated to helping individuals and students
                enhance their practical skills through innovative, technology-driven learning experiences.
                We focus on hands-on training that combines modern tools with real-world applications.
              </p>

              <p>
                Whether you're a student or a professional seeking to upskill, our programs are designed
                to empower you with the knowledge and tools needed to thrive in today's digital world.
              </p>

              <p>
                From bridging traditional craftsmanship with modern technology to offering cutting-edge IT training,
                OPTERWA is committed to creating opportunities and transforming lives through education and innovation.
              </p>

            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center text-gray-400">
            Image / Team / Training Photo
          </div>

        </div>
      </section>

      {/* IMPACT */}
      <Trust />


      {/* VISION */}
      <Vision />
      {/* Add Parteners like TVET,RDB,RGB */}
      
      {/* LEADERSHIP */}
      <Leader />
      {/* PARTNERS */}
      <Partner />
  
      <Footer />
    </div>
  );
}