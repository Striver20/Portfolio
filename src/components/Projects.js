import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Urbanix",
      subtitle: "E-commerce Platform",
      description: "Full-stack marketplace with authentication, admin dashboard, and secure checkout. Built with MERN stack.",
      technologies: ["MERN", "JWT", "Vercel", "Railway"],
      github: "https://github.com/Striver20/Urbanix",
    },
    {
      title: "Learning Management System",
      subtitle: "Educational Platform",
      description: "LMS with course management, enrollment, and progress tracking across 3 user roles.",
      technologies: ["Spring Boot", "React", "MySQL", "JWT", "AWS"],
      github: "https://github.com/Striver20/Learning-Management-System",
    },
    {
      title: "URL Shortener",
      subtitle: "High-Performance Service",
      description: "URL shortening with real-time analytics. 85% reduced database load, 6.9x faster response times.",
      technologies: ["Spring Boot", "Redis", "Docker", "MySQL"],
      github: "https://github.com/Striver20/URL-Shortner",
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center bg-[#0f0f0f] lg:ml-24">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-8 border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-blue-500 text-sm">{project.subtitle}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-[#0f0f0f] text-gray-500 border border-gray-800 text-sm"
                  >
                    {tech}
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

export default Projects;
