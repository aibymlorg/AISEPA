import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Membership from './components/Membership';
import Footer from './components/Footer';
import UseCases from './components/UseCases';

const ProvokeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.502L16.5 21.75l-.398-1.248a3.375 3.375 0 00-2.456-2.456L12.75 18l1.248-.398a3.375 3.375 0 002.456-2.456L17.25 14.25l.398 1.248a3.375 3.375 0 002.456 2.456L21 18.75l-1.248.398a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const Provoke: React.FC = () => {
  return (
    <section id="provoke" className="bg-slate-900 text-white relative py-20 md:py-24">
       <div className="absolute inset-0 bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
       <div className="container mx-auto px-6 text-center relative">
        <div className="flex justify-center mb-6">
          <ProvokeIcon className="w-12 h-12 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          The Human Mandate in an Autonomous Age
        </h2>
        <blockquote className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-300 italic">
          <p>"As AI masters programming and automates operations, our role transcends execution. The challenge is no longer to <span className="text-blue-400 not-italic font-semibold">write</span> the code, but to <span className="text-blue-400 not-italic font-semibold">architect the vision</span>. We must become the strategists, the ethicists, and the conductors of emergent intelligence. Are you ready to define business strategies and orchestrate activities for a world where machines do the work? This is the new frontier."</p>
        </blockquote>
      </div>
    </section>
  );
};


const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Provoke />
        <Hero />
        <UseCases />
        <Tracks />
        <Services />
        <Benefits />
        <Membership />
      </main>
      <Footer />
    </div>
  );
};

export default App;