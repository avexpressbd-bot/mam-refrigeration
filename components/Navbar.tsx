
import React, { useState } from 'react';
import { Menu, X, Phone, ThermometerSnowflake, Globe } from 'lucide-react';
import { useLanguage } from '../App';

interface NavbarProps {
  onBook: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.inventory, href: '#inventory' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-sky-600 rounded-lg text-white group-hover:bg-sky-700 transition-colors">
                <ThermometerSnowflake size={28} />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 tracking-tight">MAM</span>
                <span className="text-sky-600 font-semibold block text-xs -mt-1 uppercase tracking-widest">Refrigeration</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-4 mr-4 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
               <button 
                 onClick={() => setLang('en')}
                 className={`text-xs font-bold px-2 py-0.5 rounded-md transition-all ${lang === 'en' ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 EN
               </button>
               <button 
                 onClick={() => setLang('bn')}
                 className={`text-xs font-bold px-2 py-0.5 rounded-md transition-all ${lang === 'bn' ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 বাং
               </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-sky-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onBook}
              className="bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-sky-700 transition-all flex items-center gap-2 shadow-lg shadow-sky-600/20"
            >
              <Phone size={18} />
              {t.nav.callNow}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
             <button 
               onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
               className="text-slate-600 p-2 hover:bg-slate-100 rounded-full"
             >
               <Globe size={20} />
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-4">
               <button
                onClick={() => {
                  onBook();
                  setIsOpen(false);
                }}
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                {t.nav.bookService}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
