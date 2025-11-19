import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Bharat Electronics Limited (BEL)",
      period: "Present",
      description: "Building defense-grade systems. Modernizing legacy systems and improving performance through code optimization.",
    },
    {
      title: "Software Development Engineer Intern",
      company: "Scholarly",
      period: "May 2024 - Jul 2024",
      description: "Developed modular dashboards (Student, Profile, Attendance). Implemented responsive UIs using Tailwind CSS and Material UI.",
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center bg-[#1a1a1a] lg:ml-24">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          Work <span className="text-blue-500">Experience</span>
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-blue-500 pl-8 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="text-blue-500 text-sm mb-2">{exp.period}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <div className="text-gray-400 mb-4">{exp.company}</div>
              <p className="text-gray-500 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
