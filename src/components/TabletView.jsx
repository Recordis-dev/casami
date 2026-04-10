import React from 'react';
import { Menu, Plus, ShoppingCart } from 'lucide-react';
import { products } from '../data/mockData';

const TabletView = () => (
  <div className="h-screen bg-slate-100 flex flex-col">
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-lg shrink-0">
      <div className="flex items-center gap-3">
        <Menu size={24}/>
        <h2 className="font-bold text-lg">Terminal Mostrador #04</h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-blue-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase">En Línea</span>
        <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center font-bold">MG</div>
      </div>
    </header>

    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white p-2 rounded-2xl shadow-sm mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Escanear código o buscar pieza..."
            className="flex-1 border-none rounded-xl p-4 text-xl focus:ring-0 outline-none bg-slate-50 font-medium"
          />
          <button className="bg-slate-900 text-white px-10 rounded-xl font-black tracking-widest uppercase">SCAN</button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white p-5 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all shadow-sm cursor-pointer flex flex-col h-48">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">{p.sku}</span>
                <div className={`text-[10px] px-2 py-1 rounded-full font-bold ${p.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  STOCK: {p.stock}
                </div>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mt-3 flex-1">{p.name}</h3>
              <div className="flex justify-between items-center mt-4 border-t border-slate-50 pt-3">
                <span className="font-black text-blue-600 text-xl">${p.price}</span>
                <button className="bg-blue-600 text-white p-2 rounded-xl shadow-lg shadow-blue-200"><Plus size={20}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-96 bg-white border-l shadow-2xl flex flex-col">
        <div className="p-6 border-b bg-slate-50">
          <h3 className="font-bold text-slate-700 flex items-center gap-2 text-lg"><ShoppingCart size={22} className="text-blue-600"/> Carrito de Venta</h3>
        </div>
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-slate-800 text-sm">Amortiguador KYB...</p>
              <p className="text-xs text-slate-400">Cant: 1</p>
            </div>
            <p className="font-bold text-slate-900">$1,250.00</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-slate-800 text-sm">Bujía NGK Iridium</p>
              <p className="text-xs text-slate-400">Cant: 2</p>
            </div>
            <p className="font-bold text-slate-900">$370.00</p>
          </div>
        </div>
        <div className="p-8 bg-slate-900 text-white rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
          <div className="flex justify-between mb-4 text-slate-400 font-medium">
            <span>Subtotal</span>
            <span>$1,620.00</span>
          </div>
          <div className="flex justify-between mb-8 text-3xl font-black italic tracking-tighter">
            <span>TOTAL</span>
            <span>$1,620.00</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-black text-lg tracking-[0.2em] shadow-xl transition-all active:scale-95 uppercase">
            COBRAR AHORA
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TabletView;
