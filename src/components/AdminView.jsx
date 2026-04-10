import React from 'react';
import { Cloud, ChevronRight } from 'lucide-react';

const AdminView = () => (
  <div className="min-h-screen bg-slate-950 text-white flex flex-col p-8">
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-12">
         <div>
           <h2 className="text-3xl font-black italic tracking-tighter flex items-center gap-3">
             <Cloud className="text-blue-500" /> CASAMI <span className="text-blue-500">CLOUD</span>
           </h2>
           <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-bold">Control Estratégico Global</p>
         </div>
         <div className="flex gap-4">
           <div className="text-right">
             <p className="text-[10px] text-slate-500 uppercase font-bold">Almacenamiento</p>
             <p className="text-xs font-bold text-blue-400">12.5GB / 100GB (Google Cloud)</p>
           </div>
           <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold">A</div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px] shadow-2xl">
             <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-xl">Ventas por Canal</h3>
               <span className="text-[10px] bg-blue-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest">En Vivo</span>
             </div>
             <div className="h-48 flex items-end gap-4 mb-6">
                <div className="flex-1 bg-blue-600 rounded-t-xl transition-all hover:bg-blue-400" style={{height: '80%'}}></div>
                <div className="flex-1 bg-purple-600 rounded-t-xl transition-all hover:bg-purple-400" style={{height: '45%'}}></div>
                <div className="flex-1 bg-slate-700 rounded-t-xl transition-all hover:bg-slate-500" style={{height: '60%'}}></div>
                <div className="flex-1 bg-blue-600 rounded-t-xl transition-all hover:bg-blue-400" style={{height: '95%'}}></div>
                <div className="flex-1 bg-blue-600 rounded-t-xl transition-all hover:bg-blue-400" style={{height: '70%'}}></div>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                 <p className="text-[10px] text-slate-500 font-bold uppercase">Ticket Promedio</p>
                 <p className="text-2xl font-black text-blue-400">$3,450.00</p>
               </div>
               <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                 <p className="text-[10px] text-slate-500 font-bold uppercase">Conversión Web</p>
                 <p className="text-2xl font-black text-green-400">4.2%</p>
               </div>
             </div>
           </div>

           <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
             <h3 className="font-bold text-xl mb-6">Clientes Frecuentes (CRM)</h3>
             <div className="space-y-4">
                {[1,2].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-slate-800">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold">T</div>
                       <div>
                         <p className="font-bold text-sm">Taller Mecánico El Rayo</p>
                         <p className="text-[10px] text-slate-500 italic">Cliente Platinum • 12 Pedidos este mes</p>
                       </div>
                    </div>
                    <button className="text-blue-500"><ChevronRight/></button>
                  </div>
                ))}
             </div>
           </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-600 p-8 rounded-[32px] shadow-[0_20px_40px_rgba(37,99,235,0.3)]">
             <h4 className="text-sm font-bold uppercase opacity-80 mb-2">Ingresos Mes Actual</h4>
             <p className="text-4xl font-black italic tracking-tighter mb-4">$248,320.00</p>
             <div className="w-full bg-blue-500/50 h-2 rounded-full mb-2">
               <div className="w-3/4 bg-white h-full rounded-full"></div>
             </div>
             <p className="text-xs font-bold">75% de la meta mensual</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
             <h4 className="text-xs font-bold uppercase text-slate-500 mb-6">Estado de la Red</h4>
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Dominio Casami.com</span>
                  <span className="text-[10px] font-bold text-green-500">ACTIVO</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Base de Datos SQL</span>
                  <span className="text-[10px] font-bold text-green-500">ONLINE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">SSL / Seguridad</span>
                  <span className="text-[10px] font-bold text-green-500">PROTEGIDO</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminView;
