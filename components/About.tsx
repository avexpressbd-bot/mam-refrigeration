import React from 'react';
import { ShieldCheck, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../App.tsx';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1621905252507-b35482cd34b4?auto=format&fit=crop&q=80&w=800" 
            alt="Technician at work" 
            className="rounded-2xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-64 bg-sky-600 p-8 rounded-2xl shadow-xl z-20 hidden md:block">
            <div className="text-4xl font-bold text-white mb-1">10+</div>
            <div className="text-sky-100 font-medium text-sm">{t.about.exp}</div>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-100 rounded-full -z-0"></div>
        </div>

        <div>
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">{t.about.badge}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {t.about.title}
          </h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            {t.about.desc}
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.about.feat1Title}</h4>
                <p className="text-slate-500">{t.about.feat1Desc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.about.feat2Title}</h4>
                <p className="text-slate-500">{t.about.feat2Desc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.about.feat3Title}</h4>
                <p className="text-slate-500">{t.about.feat3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;