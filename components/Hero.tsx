
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-slate-200/[0.4] [mask-image:linear-gradient(to_bottom,white_30%,transparent)]"></div>
      <div className="container mx-auto px-6 text-center relative">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          The Future of <span className="text-blue-600">Intelligent Systems</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          Join the premier professional association for AI Service Enablers. Shape the next generation of distributed, autonomous, and evolutionary AI.
        </p>
        <div className="mt-8">
          <a href="#membership" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-transform duration-300 inline-block hover:scale-105">
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
