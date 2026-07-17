import { motion } from "framer-motion";

export default function Trust() {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
    },
    {
      number: "100+",
      label: "Artisans Trained",
    },
    {
      number: "5",
      label: "Technology Solutions",
    },
    {
      number: "1 Years",
      label: "Years of Innovation",
    },
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-6 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}