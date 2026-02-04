
import React from 'react';
import { useLanguage } from '../App';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { step: 1, title: t.how.step1Title, desc: t.how.step1Desc },
    { step: 2, title: t.how.step2Title, desc: t.how.step2Desc },
    { step: 3, title: t.how.step3Title, desc: t.how.step3Desc },
    { step: 4, title: t.how.step4Title, desc: t.how.step4Desc },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">{t.how.badge}</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.how.title}</h3>
        <p className="text-sky-100/70 max-w-2xl mx-auto">
          {t.how.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        <div className="hidden lg:block absolute top-10 left-32 right-32 h-0.5 border-t-2 border-dashed border-sky-700 -z-0"></div>
        
        {steps.map((item, idx) => (
          <div key={idx} className="relative z-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-sky-800 rounded-full flex items-center justify-center border-4 border-sky-700 text-3xl font-bold text-white mb-6 shadow-2xl">
              {item.step}
            </div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-sky-200/80 leading-relaxed px-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
