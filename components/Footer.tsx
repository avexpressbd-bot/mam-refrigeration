
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ThermometerSnowflake } from 'lucide-react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="p-2 bg-sky-600 rounded-lg text-white">
                <ThermometerSnowflake size={24} />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">MAM</span>
                <span className="text-sky-500 font-semibold block text-[10px] -mt-1 uppercase tracking-widest">Refrigeration</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-sky-600 pl-4">{t.footer.links}</h4>
            <ul className="space-y-4">
              {[t.nav.home, t.nav.services, t.nav.inventory, t.nav.howItWorks, t.nav.contact].map((link) => (
                <li key={link}>
                  <a href={`#`} className="text-slate-400 hover:text-sky-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-sky-600 pl-4">{t.nav.services}</h4>
            <ul className="space-y-4">
              {lang === 'bn' ? 
                ['এসি মেরামত', 'ইনস্টলেশন', 'ডিপ সার্ভিসিং', 'পুরাতন এসি ক্রয়', 'এক্সচেঞ্জ অফার'].map((service) => (
                  <li key={service}><a href="#services" className="text-slate-400 hover:text-sky-500 transition-colors">{service}</a></li>
                )) :
                ['AC Repair', 'Installation', 'Deep Servicing', 'Old AC Purchase', 'Exchange Offer'].map((service) => (
                  <li key={service}><a href="#services" className="text-slate-400 hover:text-sky-500 transition-colors">{service}</a></li>
                ))
              }
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-sky-600 pl-4">{t.footer.hours}</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between">
                <span>{lang === 'bn' ? 'শনি - বৃহস্পতি' : 'Sat - Thu'}</span>
                <span className="text-sky-500">{lang === 'bn' ? 'সকাল ৯:০০ - রাত ৯:০০' : '9:00 AM - 9:00 PM'}</span>
              </li>
              <li className="flex justify-between">
                <span>{lang === 'bn' ? 'শুক্রবার' : 'Friday'}</span>
                <span className="text-sky-500">{lang === 'bn' ? 'বিকাল ২:০০ - রাত ৮:০০' : '2:00 PM - 8:00 PM'}</span>
              </li>
              <li className="pt-4 text-sm italic">
                {t.footer.emergency}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} MAM Refrigeration. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-sky-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
