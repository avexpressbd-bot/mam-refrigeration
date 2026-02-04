
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Our Clients Say</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-slate-50 p-8 rounded-3xl relative">
            <div className="absolute -top-4 left-8 text-sky-200">
              <Quote size={48} fill="currentColor" />
            </div>
            <div className="flex gap-1 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'} 
                />
              ))}
            </div>
            <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">
              "{t.comment}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-slate-500 text-sm">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
