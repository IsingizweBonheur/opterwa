import React from "react";
import { motion } from "framer-motion";

export default function CoreService() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const services = [
    {
      title: "IT & Digital Solutions",
      description:
        "Complete technology infrastructure, software development, and digital transformation services for businesses.",
      items: [
        "Network Infrastructure & Security",
        "Software Development",
        "Cloud Solutions",
        "CCTV & Access Control",
        "Digital Marketing"
      ]
    },
    {
      title: "Pottery Technology",
      description:
        "Modern manufacturing solutions, digital design tools, and sustainable practices for pottery artisans.",
      items: [
        "Modern Kiln Systems",
        "Clay Processing Technology",
        "Digital Pottery Design",
        "Sustainable Manufacturing",
        "Automated Production"
      ]
    },
    {
      title: "Integrated Solutions",
      description:
        "Blended technology solutions connecting traditional pottery with modern digital platforms and tools.",
      items: [
        "Digital Showrooms",
        "IoT Kiln Monitoring",
        "Inventory Management",
        "E-commerce Integration",
        "Smart Energy Systems"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bridging technology, innovation, and traditional craftsmanship to empower communities and businesses.
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* List */}
              <ul className="space-y-2">
                {service.items.map((itemText, i) => (
                  <li
                    key={i}
                    className="text-gray-700 text-sm flex items-start gap-2"
                  >
                    <span className="text-indigo-500 mt-1">•</span>
                    {itemText}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}