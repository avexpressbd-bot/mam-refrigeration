
import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../App';

interface ServicesProps {
  onServiceClick: (type: 'service' | 'buy' | 'sell') => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const { t, lang } = useLanguage();

  // Helper to get translated service titles if needed, but for now we rely on content.tsx 
  // with a minor tweak or just use the structure.
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">{t.services.badge}</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.services.title}</h3>
        <p className="text-slate-500 text-lg">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Wind;
          
          // Simple dynamic translation for demo purposes
          const displayTitle = lang === 'bn' ? 
            (service.id === '1' ? 'এসি সার্ভিস ও রক্ষণাবেক্ষণ' : 
             service.id === '2' ? 'দক্ষ এসি মেরামত' : 
             service.id === '3' ? 'পেশাদার ইনস্টলেশন' : 
             service.id === '4' ? 'পুরাতন এসি ক্রয়' : 'ব্যবহৃত এসি বিক্রয়') 
            : service.title;

          return (
            <div 
              key={service.id} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{displayTitle}</h4>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button 
                onClick={() => {
                   if (service.title.toLowerCase().includes('purchase')) onServiceClick('sell');
                   else if (service.title.toLowerCase().includes('sales')) onServiceClick('buy');
                   else onServiceClick('service');
                }}
                className="text-sky-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
              >
                {t.services.learnMore}
                <LucideIcons.ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
