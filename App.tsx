
import React, { useState, createContext, useContext, ReactNode } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Inventory from './components/Inventory.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import BookingModal from './components/BookingModal.tsx';
import { Language, translations } from './translations.ts';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'service' | 'buy' | 'sell'>('service');

  const openBookingModal = (type: 'service' | 'buy' | 'sell' = 'service') => {
    setModalType(type);
    setModalOpen(true);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className={`min-h-screen flex flex-col ${lang === 'bn' ? 'lang-bn' : ''}`}>
        <Navbar onBook={() => openBookingModal('service')} />
        
        <main className="flex-grow">
          <section id="home">
            <Hero onAction={openBookingModal} />
          </section>
          
          <section id="about" className="py-20 bg-white">
            <About />
          </section>
          
          <section id="services" className="py-20 bg-slate-50">
            <Services onServiceClick={openBookingModal} />
          </section>
          
          <section id="inventory" className="py-20 bg-white">
            <Inventory onBuy={openBookingModal} />
          </section>
          
          <section id="how-it-works" className="py-20 bg-sky-900 text-white">
            <HowItWorks />
          </section>
          
          <section id="testimonials" className="py-20 bg-white">
            <Testimonials />
          </section>
          
          <section id="contact" className="py-20 bg-slate-50">
            <Contact />
          </section>
        </main>

        <Footer />

        {isModalOpen && (
          <BookingModal 
            type={modalType} 
            onClose={() => setModalOpen(false)} 
          />
        )}

        <a
          href="https://wa.me/8801700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-2.32 0-4.591 1.161-4.591 4.591 0 1.251.547 2.391 1.444 3.197l-.916 3.352 3.447-.905c.803.541 1.768.86 2.812.86 3.43 0 5.864-2.5 5.864-5.864 0-3.43-2.434-7.231-8.06-7.231zm5.275 8.357c-.201.559-1.161 1.062-1.611 1.121-.403.059-.92.091-2.956-.732-2.592-1.047-4.257-3.69-4.387-3.86-.13-.171-1.053-1.4-1.053-2.67 0-1.27.665-1.896.902-2.153.237-.257.519-.321.692-.321.173 0 .346.002.497.01.161.008.381-.06.596.455.216.519.736 1.796.799 1.926.064.13.107.28.02.45-.086.17-.13.279-.257.426-.127.147-.267.33-.381.442-.13.13-.267.271-.115.534.152.263.676 1.114 1.443 1.795.986.877 1.815 1.147 2.071 1.277.256.13.407.108.559-.064.152-.172.651-.758.825-1.016.174-.258.347-.216.585-.13.237.086 1.503.708 1.763.838.261.13.434.195.498.303.065.11.065.632-.136 1.191z"/>
          </svg>
        </a>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
