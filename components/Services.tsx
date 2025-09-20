
import React from 'react';
import { SERVICE_OFFERINGS } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8">
    <div className="mb-6">
      <service.icon className="w-12 h-12 text-blue-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
    <p className="text-blue-700 italic font-medium mb-4">"{service.valueProp}"</p>
    <ul className="space-y-2">
      {service.packages.map((pkg) => (
        <li key={pkg} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span className="text-slate-600">{pkg}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Mastering Intelligence: Core Competencies & Service Offerings
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Our members excel in cutting-edge AI architecture, translating complex technical patterns into impactful business value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_OFFERINGS.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
