import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["C++", "Java", "JavaScript", "SQL", "Python"] },
    { title: "Frontend", skills: ["React", "Next.js 14", "Tailwind CSS", "Material UI", "HTML/CSS"] },
    { title: "Backend", skills: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "JWT", "Redis"] },
    { title: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL", "pgvector"] },
    { title: "Cloud & Tools", skills: ["AWS", "Docker", "Git"] },
    { title: "AI/ML", skills: ["Machine Learning", "Deep Learning", "LangChain", "Data Analysis"] }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center bg-[#0f0f0f] lg:ml-24">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-[#1a1a1a] text-gray-400 border border-gray-800 hover:border-blue-500 hover:text-blue-500 transition-all text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
