import React from 'react';
import { ShoppingBag, Search, Settings } from 'lucide-react';
import { categories } from '../data/mockData';

const EcommerceView = () => (
  <div className="min-h-screen bg-white">
    <nav className="border-b px-6 py-4 flex justify-between items-center bg-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-black italic">C</div>
        <span className="font-bold text-xl tracking-tighter">CASAMI <span className="text-blue-600">AUTO</span></span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
        <span className="text-blue-600 border-b-2 border-blue-600 cursor-pointer">Catálogo</span>
        <span className="hover:text-blue-600 cursor-pointer">Ofertas</span>
        <span className="hover:text-blue-600 cursor-pointer">Mayoreo</span>
        <span className="hover:text-blue-600 cursor-pointer">Sucursales</span>
      </div>
      <div className="flex items-center gap-4">
        <Search size={20} className="text-slate-400" />
        <div className="relative">
          <ShoppingBag size={20} className="text-slate-700" />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
        </div>
      </div>
    </nav>

    <div className="bg-slate-900 text-white px-8 py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mb-6 italic leading-tight uppercase">
          Las refacciones <br/>que tu auto merece
        </h1>
        <p className="text-slate-400 mb-8 max-w-lg text-lg">Tu local digital abierto 24/7. Envíos a todo México con garantía Casami.</p>
        <div className="bg-white rounded-xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl max-w-2xl">
          <Search className="text-slate-400 mx-2 hidden md:block" size={24}/>
          <input type="text" placeholder="Año, Marca, Modelo o SKU de pieza..." className="text-slate-900 w-full focus:outline-none p-3 text-lg" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all w-full md:w-auto">BUSCAR PIEZA</button>
        </div>
      </div>
    </div>

    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-slate-800">Categorías Populares</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map(cat => (
          <div key={cat} className="aspect-square bg-slate-50 border border-slate-100 hover:border-blue-500 hover:shadow-xl rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer group">
            <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Settings size={24} className="text-blue-600"/>
            </div>
            <span className="text-sm font-bold text-slate-700">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EcommerceView;
