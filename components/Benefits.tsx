
import React from 'react';
import { MEMBER_BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Why Join the AI Service Enabler Professional Association?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/id/119/600/400" 
              alt="Innovation and collaboration"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {MEMBER_BENEFITS.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
