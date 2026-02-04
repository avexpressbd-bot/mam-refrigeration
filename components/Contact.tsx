import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../App.tsx';
import { db, ref, push, serverTimestamp } from '../firebase.ts';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Servicing',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await push(ref(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp()
      });
      alert(lang === 'bn' ? "সফলভাবে পাঠানো হয়েছে! আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।" : "Success! Our representative will contact you shortly.");
      setFormData({ name: '', phone: '', service: 'AC Servicing', message: '' });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      alert(lang === 'bn' ? "দুঃখিত, কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।" : "Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">{t.contact.badge}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{t.contact.title}</h3>
          
          <div className="space-y-8 mb-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-sky-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.contact.phone}</h4>
                <p className="text-slate-500">+880 1700-000000</p>
                <p className="text-slate-500">+880 1600-000000</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-sky-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.contact.email}</h4>
                <p className="text-slate-500">info@mamrefrigeration.com</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-sky-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.contact.location}</h4>
                <p className="text-slate-500">{lang === 'bn' ? 'দোকান নং ২৪, মেইন রোড, বনানী ডিওএইচএস, ঢাকা ১২১৩' : 'Shop No. 24, Main Road, Banani DOHS, Dhaka 1213'}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-64">
             <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map Background"
                className="w-full h-full object-cover opacity-50 grayscale"
               />
               <div className="absolute inset-0 bg-sky-900/10"></div>
               <div className="absolute flex flex-col items-center">
                  <MapPin size={40} className="text-red-500 fill-red-500" />
                  <span className="bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg font-bold mt-2">MAM Refrigeration</span>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.formName}</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.formPhone}</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.formService}</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              >
                <option value="AC Servicing">{lang === 'bn' ? 'এসি সার্ভিসিং' : 'AC Servicing'}</option>
                <option value="AC Repair">{lang === 'bn' ? 'এসি মেরামত' : 'AC Repair'}</option>
                <option value="AC Installation">{lang === 'bn' ? 'এসি ইনস্টলেশন' : 'AC Installation'}</option>
                <option value="Sell Old AC">{lang === 'bn' ? 'পুরাতন এসি বিক্রি' : 'Sell My Old AC'}</option>
                <option value="Buy Used AC">{lang === 'bn' ? 'ব্যবহৃত এসি ক্রয়' : 'Buy Used AC'}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.formMsg}</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-sky-600 text-white font-bold py-4 rounded-xl hover:bg-sky-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  {t.contact.formBtn}
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-slate-400">
            <div className="h-px w-full bg-slate-100"></div>
            <span className="text-xs uppercase font-bold tracking-widest whitespace-nowrap">{lang === 'bn' ? 'সরাসরি চ্যাট' : 'Or Direct Chat'}</span>
            <div className="h-px w-full bg-slate-100"></div>
          </div>

          <a 
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={24} />
            {t.contact.chatBtn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;