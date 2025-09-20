
import React from 'react';
import { PROFESSIONAL_TRACKS } from '../constants';
import type { Track } from '../types';

const TrackCard: React.FC<{ track: Track }> = ({ track }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-start">
    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
      {track.level}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{track.title}</h3>
    <p className="text-slate-600 text-base flex-grow">{track.description}</p>
  </div>
);

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            AI Service Enabler Professional Tracks
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Our association recognizes a clear career progression in the AI Service Enabler field, from integrating simple AI applications to leading enterprise-wide intelligence transformations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROFESSIONAL_TRACKS.map((track) => (
            <TrackCard key={track.level} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
