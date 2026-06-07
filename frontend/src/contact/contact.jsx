import React, { useState } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import SEO from "../seo/seo";
import StructuredData from '../seo/structure';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane,
  FaUser, 
  FaComment,
  FaHeadset,
  FaRegClock,
  FaRegBuilding,
  FaCheckCircle,
  FaSpinner,
  FaPhoneVolume,
  FaRegEnvelope,
  FaGlobe,
  FaRegSmile,
  FaRegPaperPlane
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaRegEnvelope,
      title: "Email Us",
      value: "info.opterwa@gmail.com",
      link: "mailto:info.opterwa@gmail.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: FaPhoneVolume,
      title: "Call Us",
      value: "+250 788 231 302",
      link: "tel:+250788231302",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+250 788 231 302",
      link: "https://wa.me/250788231302",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
         <SEO 
        title="Contact us"
        description="Contact OPTERWA for customer support."
        url="https://opterwa.com/contact"
      />
      <StructuredData />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <FaHeadset className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us — we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaRegPaperPlane className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions? We're here to help and answer any questions you might have
            </p>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.icon === FaWhatsapp ? "_blank" : "_self"}
                    rel={info.icon === FaWhatsapp ? "noopener noreferrer" : ""}
                    className="block group"
                  >
                    <div className={`${info.bgColor} ${info.hoverColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{info.title}</h3>
                          <p className="text-gray-600 text-sm">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* Additional Info */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaRegClock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600 text-sm">Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaRegSmile className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Response</h3>
                    <p className="text-gray-600 text-sm">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <FaRegBuilding className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <FaComment className="absolute left-3 top-4 text-gray-400 w-4 h-4" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center flex items-center justify-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-green-600" />
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Our Office</h3>
            <p className="text-gray-600 mb-4">Kigali, Rwanda</p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <p className="text-sm text-gray-500 flex items-center gap-2 justify-center">
                <FaMapMarkerAlt className="w-3 h-3" /> Located in Kigali, Rwanda
              </p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-2 justify-center">
                <FaClock className="w-3 h-3" /> For exact directions, please contact us via phone or email
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
        <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
      `}</style>
    </div>
  );
}