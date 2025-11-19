import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-[#1a1a1a] lg:ml-24">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
          <p>
            I'm a <span className="text-white font-semibold">Software Development Engineer</span> at Bharat Electronics Limited (BEL), 
            building defense-grade systems and modernizing legacy applications.
          </p>
          <p>
            Passionate about <span className="text-blue-500 font-semibold">AI/ML</span> and full-stack development. 
            I work with Spring Boot, React, Node.js, and cloud platforms like AWS.
          </p>
          <p>
            Solved <span className="text-blue-500 font-semibold">900+ problems</span> on competitive programming platforms including LeetCode and Codeforces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500">3+</div>
            <div className="text-gray-500 mt-2">Years</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500">10+</div>
            <div className="text-gray-500 mt-2">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500">900+</div>
            <div className="text-gray-500 mt-2">Problems</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500">50+</div>
            <div className="text-gray-500 mt-2">Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
