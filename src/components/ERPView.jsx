import React from 'react';
import { LayoutDashboard, Truck, Package, Database } from 'lucide-react';
import { products } from '../data/mockData';

const ERPView = () => (
  <div className="min-h-screen bg-slate-50 flex">
    <div className="w-64 bg-slate-900 text-white flex flex-col p-6 space-y-4 shrink-0">
      <div className="text-2xl font-black italic text-blue-500 mb-8 tracking-tighter">CASAMI ERP</div>
      <div className="space-y-2">
         <div className="flex items-center gap-3 p-3 bg-blue-600 rounded-xl font-bold"><LayoutDashboard size={20}/> Dashboard</div>
         <div className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><Truck size={20}/> Logística</div>
         <div className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><Package size={20}/> Inventario</div>
         <div className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><Database size={20}/> Backup Nube</div>
      </div>
    </div>
    <div className="flex-1">
      <header className="h-16 bg-white border-b px-8 flex items-center justify-between">
        <h2 className="font-bold text-slate-500 uppercase tracking-widest text-sm">Operaciones de Almacén</h2>
        <div className="flex items-center gap-2 text-xs font-bold text-green-500 bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div> SINCRONIZADO
        </div>
      </header>
      <div className="p-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Items Totales</p>
              <p className="text-3xl font-black text-slate-800">12,405</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Bajo Stock</p>
              <p className="text-3xl font-black text-red-500">18</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Pedidos Hoy</p>
              <p className="text-3xl font-black text-blue-600">42</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Valor Inventario</p>
              <p className="text-3xl font-black text-slate-800">$4.2M</p>
            </div>
         </div>

         <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
           <div className="p-6 border-b flex justify-between items-center">
             <h3 className="font-bold text-slate-800">Control de Entradas / Salidas</h3>
             <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">+ AGREGAR PIEZA</button>
           </div>
           <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                <tr>
                  <th className="p-6">SKU</th>
                  <th className="p-6">Producto</th>
                  <th className="p-6">Localización</th>
                  <th className="p-6">Stock</th>
                  <th className="p-6 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {products.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-mono font-bold text-blue-600 text-xs">{p.sku}</td>
                    <td className="p-6 font-bold text-slate-700">{p.name}</td>
                    <td className="p-6 text-slate-400 italic text-xs">ESTANTE B-12</td>
                    <td className="p-6 font-bold">{p.stock}</td>
                    <td className="p-6 text-right"><button className="text-blue-600 font-bold text-xs hover:underline">EDITAR</button></td>
                  </tr>
                ))}
              </tbody>
           </table>
         </div>
      </div>
    </div>
  </div>
);

export default ERPView;
