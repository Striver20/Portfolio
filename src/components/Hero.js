import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative">
      {/* Scroll Down Left */}
      <div className="fixed left-8 bottom-20 text-gray-500 text-sm tracking-widest hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <span className="writing-mode-vertical transform rotate-180">scroll down</span>
          <div className="w-px h-20 bg-gray-700 scroll-indicator"></div>
        </div>
      </div>

      {/* Scroll Down Right */}
      <div className="fixed right-8 bottom-20 text-gray-500 text-sm tracking-widest hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <span className="writing-mode-vertical transform rotate-180">scroll down</span>
          <div className="w-px h-20 bg-gray-700 scroll-indicator"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="space-y-6">
          {/* Code-style comments */}
          <div className="text-gray-600 font-mono text-sm md:text-base">
            <span className="text-gray-500">{'<'}</span>
            <span className="text-gray-600">video</span>
            <span className="text-gray-500">{'>'}</span>
          </div>
          <div className="text-gray-600 font-mono text-sm md:text-base ml-8">
            <span className="text-gray-500">{'<'}</span>
            <span className="text-gray-600">body</span>
            <span className="text-gray-500">{'>'}</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 ml-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Hi,<br />
              I'm <span className="text-blue-500">Ashit</span>,<br />
              <span className="text-gray-300">software</span><br />
              <span className="text-gray-300">developer</span>
            </h1>

            {/* Subtitle */}
            <div className="text-gray-500 font-mono text-sm md:text-base pt-4">
              <span className="text-gray-600">{'<'}</span>
              <span className="text-gray-500">p</span>
              <span className="text-gray-600">{'>'}</span>
            </div>
            <p className="text-gray-400 text-lg md:text-xl tracking-wide ml-8">
              Full Stack Developer / AI ML Enthusiast
            </p>
            <div className="text-gray-500 font-mono text-sm md:text-base ml-8">
              <span className="text-gray-600">{'</'}</span>
              <span className="text-gray-500">p</span>
              <span className="text-gray-600">{'>'}</span>
            </div>

            {/* CTA Button */}
            <div className="pt-8 ml-8">
              <a
                href="#contact"
                className="inline-block px-10 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg font-medium tracking-wide"
              >
                Contact me!
              </a>
            </div>
          </div>

          {/* Closing tags */}
          <div className="text-gray-600 font-mono text-sm md:text-base ml-8">
            <span className="text-gray-500">{'</'}</span>
            <span className="text-gray-600">body</span>
            <span className="text-gray-500">{'>'}</span>
          </div>
          <div className="text-gray-600 font-mono text-sm md:text-base">
            <span className="text-gray-500">{'</'}</span>
            <span className="text-gray-600">video</span>
            <span className="text-gray-500">{'>'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
