
import React from 'react';

// Icon for Home Services
const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h4.5m-1.5-18h3.75a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V5.25h-2.25a.75.75 0 010-1.5z" />
  </svg>
);


// Icon for Healthcare
const HealthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const UseCaseCard: React.FC<{
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  distributed: string;
  autonomous: string;
  evolutionary: string;
  imageUrl: string;
  imageAlt: string;
}> = ({ icon: Icon, title, description, distributed, autonomous, evolutionary, imageUrl, imageAlt }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src={imageUrl} alt={imageAlt} className="w-full h-48 md:h-full object-cover" />
        <div className="p-8">
          <div className="flex items-center mb-6">
            <Icon className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          </div>
          <p className="text-slate-600 mb-6">{description}</p>
          <div className="space-y-4 text-sm">
            <div className="flex">
              <span className="font-semibold text-blue-600 w-28 flex-shrink-0">Distributed:</span>
              <span className="text-slate-700">{distributed}</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-blue-600 w-28 flex-shrink-0">Autonomous:</span>
              <span className="text-slate-700">{autonomous}</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-blue-600 w-28 flex-shrink-0">Evolutionary:</span>
              <span className="text-slate-700">{evolutionary}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What Does This Future Look Like?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            These aren't abstract concepts. Here’s how coordinated AI can reshape our everyday lives.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UseCaseCard
            icon={HomeIcon}
            title="Intelligence Home Services Management"
            description="Imagine your home's maintenance systems, smart appliances, and preferred service providers are all connected. Your home can predict a plumbing issue, schedule a trusted professional, grant them temporary access, and process payment, all while keeping you informed."
            distributed="Smart home devices (thermostat, locks), service provider dispatch systems, and payment gateways operate as independent but coordinated agents."
            autonomous="The system proactively schedules maintenance, manages appointments with providers, and handles access logistics without requiring your constant input."
            evolutionary="It learns your preferred service times, budget constraints, and even the performance of different providers to optimize for better service and cost over time."
            imageUrl="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&h=400&auto=format&fit=crop"
            imageAlt="A modern living room with a smart home control hub on the coffee table."
          />
          <UseCaseCard
            icon={HealthIcon}
            title="Your Personal Health Guardian"
            description="Picture your wearable sensor, smart fridge, and pharmacy's inventory system working together. Your AI guardian notices you're low on a key vitamin, sees you're out of oranges, adds them to your grocery list, and alerts the pharmacy to prepare your prescription refill."
            distributed="Your watch, fridge, and pharmacy are separate systems sharing relevant, secure data."
            autonomous="It takes action—like updating a shopping list or flagging a prescription—without your command."
            evolutionary="It learns your health habits and diet, becoming a more accurate and proactive health partner over time."
            imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=400&h=400&auto=format&fit=crop"
            imageAlt="Friendly humanoid robot assistant in a caring pose"
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
