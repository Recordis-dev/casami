import React from 'react';
import { ShoppingCart, Tablet, Package, Cloud, Rocket } from 'lucide-react';

const EcosystemSwitcher = ({ currentView, setCurrentView }) => (
  <div className="bg-slate-900 text-white p-2 flex justify-start md:justify-center gap-2 md:gap-4 text-[9px] md:text-[10px] uppercase tracking-widest font-bold border-b border-slate-700 overflow-x-auto whitespace-nowrap sticky top-0 z-50 scrollbar-hide">
    <button
      onClick={() => setCurrentView('ecommerce')}
      className={`flex items-center gap-1 px-3 py-1 rounded ${currentView === 'ecommerce' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
    >
      <ShoppingCart size={12}/> E-Commerce
    </button>
    <button
      onClick={() => setCurrentView('tablet')}
      className={`flex items-center gap-1 px-3 py-1 rounded ${currentView === 'tablet' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
    >
      <Tablet size={12}/> Venta Piso
    </button>
    <button
      onClick={() => setCurrentView('warehouse')}
      className={`flex items-center gap-1 px-3 py-1 rounded ${currentView === 'warehouse' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
    >
      <Package size={12}/> Almacén (ERP)
    </button>
    <button
      onClick={() => setCurrentView('admin')}
      className={`flex items-center gap-1 px-3 py-1 rounded ${currentView === 'admin' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
    >
      <Cloud size={12}/> Gerencia (CRM)
    </button>
    <button
      onClick={() => setCurrentView('proposal')}
      className={`flex items-center gap-1 px-3 py-1 rounded ${currentView === 'proposal' ? 'bg-orange-500 text-white' : 'bg-orange-900/30 text-orange-300 hover:bg-orange-800'}`}
    >
      <Rocket size={12}/> Propuesta Inversión
    </button>
  </div>
);

export default EcosystemSwitcher;
