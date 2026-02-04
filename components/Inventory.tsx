
import React from 'react';
import { PRODUCTS } from '../constants.tsx';
import { Tag, BadgeCheck, Thermometer } from 'lucide-react';
import { useLanguage } from '../App.tsx';

interface InventoryProps {
  onBuy: (type: 'buy') => void;
}

const Inventory: React.FC<InventoryProps> = ({ onBuy }) => {
  const { t, lang } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">{t.inventory.badge}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{t.inventory.title}</h3>
        </div>
        <button 
          onClick={() => onBuy('buy')}
          className="bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors"
        >
          {t.inventory.btnAll}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                {product.condition}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-slate-900">{product.name}</h4>
                <div className="text-sky-600 font-bold text-lg">৳{product.price.toLocaleString()}</div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                <span className="flex items-center gap-1"><Thermometer size={16} /> {product.capacity}</span>
                <span className="flex items-center gap-1"><BadgeCheck size={16} /> {lang === 'bn' ? 'সার্টিফাইড' : 'Certified'}</span>
              </div>

              <div className="space-y-2 mb-6">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    {spec}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onBuy('buy')}
                className="mt-auto w-full bg-white border border-slate-300 text-slate-800 font-bold py-3 rounded-xl hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all shadow-sm"
              >
                {t.inventory.btnInquiry}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
