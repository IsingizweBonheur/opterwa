import React from "react";

export default function Leader() {
  const leaders = [
    {
      initials: "JH",
      name: "HATEGEKIMANA Joseph",
      title: "Chief Executive Officer",
      description:
        "Founder and CEO of OPTERWA, Joseph leads the organization's strategic vision and growth. With a passion for bridging technology and traditional craftsmanship, he is committed to empowering Rwandan artisans and businesses through innovative digital solutions.",
      initialBg: "from-indigo-100 to-indigo-200",
      initialColor: "text-indigo-600",
      titleColor: "text-indigo-600",
    },
    {
      initials: "IB",
      name: "DUSHIME ISINGIZWE Bonheur",
      title: "IT Director",
      description:
        "As IT Director, Bonheur oversees the technical infrastructure and digital innovation at OPTERWA. He leads the development of cutting-edge technology solutions that transform traditional industries and create sustainable digital ecosystems for businesses across Rwanda.",
      initialBg: "from-indigo-100 to-indigo-200",
      initialColor: "text-indigo-600",
      titleColor: "text-indigo-600",
    },
    {
      initials: "HB",
      name: "HABWISHIMWE Bonance",
      title: "Project Manager",
      description:
        "As Project Manager, Bonance coordinates OPTERWA projects from planning to execution. He ensures smooth delivery of community programs, training initiatives, and technology deployments while maintaining strong communication between teams and stakeholders.",
      initialBg: "from-indigo-100 to-indigo-200",
      initialColor: "text-indigo-600",
      titleColor: "text-indigo-600",
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Meet the visionaries driving our mission forward
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${leader.initialBg} rounded-full flex items-center justify-center`}
                >
                  <span className={`text-2xl font-bold ${leader.initialColor}`}>
                    {leader.initials}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {leader.name}
              </h3>

              <p className={`${leader.titleColor} font-medium text-sm mb-4`}>
                {leader.title}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
