import React from 'react';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../App.tsx';

interface HeroProps {
  onAction: (type: 'service' | 'buy' | 'sell') => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-slate-900 min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599933333394-84bc44299348?auto=format&fit=crop&q=80&w=2000" 
          alt="AC Unit" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-600/20 text-sky-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-sky-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t.hero.title} <span className="text-sky-500 underline decoration-sky-600/30 underline-offset-8">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => onAction('service')}
              className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all flex items-center justify-center gap-2 group"
            >
              {t.hero.btnBook}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onAction('sell')}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5"
            >
              {t.hero.btnSell}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[t.hero.f1, t.hero.f2, t.hero.f3].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-slate-400">
                <CheckCircle size={18} className="text-sky-500" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;