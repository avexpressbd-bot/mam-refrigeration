
import React, { useState } from 'react';
import { X, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../App.tsx';
import { db, ref, push, set, serverTimestamp } from '../firebase.ts';

interface BookingModalProps {
  type: 'service' | 'buy' | 'sell';
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ type, onClose }) => {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    details: ''
  });

  const titles = {
    service: lang === 'bn' ? 'পেশাদার এসি সার্ভিস বুকিং' : 'Book a Professional AC Service',
    buy: lang === 'bn' ? 'ব্যবহৃত এসি ক্রয়ের অনুসন্ধান' : 'Inquiry for Used AC Purchase',
    sell: lang === 'bn' ? 'পুরাতন এসির ফ্রি মূল্য জানুন' : 'Get a Free Quote for Your Old AC'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const bookingsRef = ref(db, 'bookings');
      const newBookingRef = push(bookingsRef);
      await set(newBookingRef, {
        ...formData,
        type: type,
        source: 'Modal Booking',
        timestamp: serverTimestamp()
      });
      
      alert(lang === 'bn' ? "বুকিং সফল হয়েছে! আমরা আপনার সাথে দ্রুত যোগাযোগ করব।" : "Booking successful! We will contact you shortly.");
      onClose();
    } catch (error) {
      console.error("Firebase Error:", error);
      alert(lang === 'bn' ? "দুঃখিত, আবার চেষ্টা করুন।" : "Error submitting inquiry. Please check your database rules.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-sky-600 px-8 py-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">{titles[type]}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <p className="text-slate-500 mb-6">
            {lang === 'bn' ? 'নিচের ফর্মটি পূরণ করুন, আমাদের প্রতিনিধি ৩০ মিনিটের মধ্যে যোগাযোগ করবে।' : 'Please fill out the form below and our team will contact you within 30 minutes.'}
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700">{lang === 'bn' ? 'সম্পূর্ণ নাম' : 'Full Name'}</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder={lang === 'bn' ? "উদা: আরফুল ইসলাম" : "Ex: Tanvir Ahmed"}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700">{lang === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}</label>
              <input 
                required
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="01712-345678"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700">{lang === 'bn' ? 'ঢাকার লোকেশন' : 'Area in Dhaka'}</label>
              <input 
                required
                type="text" 
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder={lang === 'bn' ? "উদা: উত্তরা, সেক্টর ৪" : "Ex: Uttara, Sector 4"}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700">{lang === 'bn' ? 'অতিরিক্ত তথ্য (ব্র্যান্ড, সমস্যা ইত্যাদি)' : 'Additional Details (Brand, Issue, etc.)'}</label>
              <textarea 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                placeholder={lang === 'bn' ? "উদা: ১.৫ টন গ্রী এসি, কুলিং সমস্যা" : "Ex: 1.5 Ton Gree AC, cooling issue"}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-sky-600 text-white font-bold py-4 rounded-xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : (lang === 'bn' ? 'অনুরোধ পাঠান' : 'Confirm Inquiry')}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Check size={14} className="text-green-500" />
            {lang === 'bn' ? 'কোন অগ্রিম পেমেন্ট প্রয়োজন নেই।' : 'No advance payment required. Cash on service.'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
