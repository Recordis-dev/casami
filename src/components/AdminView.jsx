import React from 'react';
import { Cloud, ChevronRight, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const AdminView = () => {
  const { products, sales } = useStore();

  const inventoryValue = products.reduce((acc, p) => acc + (p.stock * p.price), 0);
  const salesToday = sales.reduce((acc, s) => acc + s.total, 0);
  const monthlyGoal = 350000;
  const progressPercent = Math.min((salesToday / monthlyGoal) * 100, 100).toFixed(1);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col p-4 md:p-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
           <div>
             <h2 className="text-3xl font-black italic tracking-tighter flex items-center gap-3">
               <Cloud className="text-blue-500" /> CASAMI <span className="text-blue-500">CLOUD</span>
             </h2>
             <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-bold">Control Estratégico Global</p>
           </div>
           <div className="flex gap-4 items-center bg-slate-900/50 p-3 rounded-2xl border border-slate-800">
             <div className="text-right">
               <p className="text-[10px] text-slate-500 uppercase font-bold">Base de Datos</p>
               <p className="text-xs font-bold text-green-400 flex items-center gap-2 justify-end">
                 <ShieldCheck size={12}/> SINCRONIZADA
               </p>
             </div>
             <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-blue-500">A</div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full group-hover:bg-blue-600/10 transition-colors"></div>
               <div className="flex justify-between items-center mb-10 relative z-10">
                 <div>
                   <h3 className="font-bold text-xl">Ventas del Día</h3>
                   <p className="text-slate-500 text-xs">Actualizado hace un momento</p>
                 </div>
                 <span className="text-[10px] bg-blue-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest animate-pulse">En Vivo</span>
               </div>

               <div className="h-48 flex items-end gap-2 md:gap-4 mb-8 relative z-10">
                  {/* Simulated chart bars based on actual sales + mock */}
                  <div className="flex-1 bg-slate-800 rounded-t-xl h-[30%]"></div>
                  <div className="flex-1 bg-slate-800 rounded-t-xl h-[45%]"></div>
                  <div className="flex-1 bg-slate-800 rounded-t-xl h-[25%]"></div>
                  <div className="flex-1 bg-blue-600/40 rounded-t-xl h-[60%]"></div>
                  <div className="flex-1 bg-blue-600 rounded-t-xl animate-in slide-in-from-bottom duration-1000" style={{height: `${Math.max(20, progressPercent)}%`}}></div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                 <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                   <div className="flex justify-between items-start mb-2">
                     <p className="text-[10px] text-slate-500 font-bold uppercase">Valor de Almacén</p>
                     <TrendingUp size={16} className="text-blue-500" />
                   </div>
                   <p className="text-2xl font-black text-white">${inventoryValue.toLocaleString()}</p>
                   <p className="text-[10px] text-green-500 font-bold mt-1">+2.4% vs mes anterior</p>
                 </div>
                 <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                   <div className="flex justify-between items-start mb-2">
                     <p className="text-[10px] text-slate-500 font-bold uppercase">Ticket Promedio</p>
                     <Target size={16} className="text-purple-500" />
                   </div>
                   <p className="text-2xl font-black text-white">${sales.length > 0 ? (salesToday / sales.length).toLocaleString() : '0'}</p>
                   <p className="text-[10px] text-slate-500 font-bold mt-1">Basado en {sales.length} ventas</p>
                 </div>
               </div>
             </div>

             <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-xl flex items-center gap-3"><Users className="text-blue-500" size={20}/> Clientes Platinum (CRM)</h3>
                 <button className="text-xs text-blue-500 font-bold uppercase tracking-widest hover:underline">Ver Todos</button>
               </div>
               <div className="space-y-4">
                  {[
                    { name: 'Taller Mecánico El Rayo', pedidos: 14, status: 'Platinum' },
                    { name: 'Refaccionaria García', pedidos: 8, status: 'Gold' },
                    { name: 'Autoservicio Express', pedidos: 5, status: 'Silver' }
                  ].map((client, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors group">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500 group-hover:text-blue-500 transition-colors">{client.name[0]}</div>
                         <div>
                           <p className="font-bold text-sm">{client.name}</p>
                           <p className="text-[10px] text-slate-500 italic">Cliente {client.status} • {client.pedidos} Pedidos este mes</p>
                         </div>
                      </div>
                      <button className="text-slate-600 group-hover:text-blue-500 transition-colors"><ChevronRight/></button>
                    </div>
                  ))}
               </div>
             </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 p-8 rounded-[32px] shadow-[0_20px_40px_rgba(37,99,235,0.3)] relative overflow-hidden group">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
               <h4 className="text-sm font-bold uppercase opacity-80 mb-2 relative z-10">Ventas Hoy</h4>
               <p className="text-4xl font-black italic tracking-tighter mb-4 relative z-10">${salesToday.toLocaleString()}</p>
               <div className="w-full bg-blue-900/30 h-3 rounded-full mb-3 relative z-10 p-0.5">
                 <div className="bg-white h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{width: `${progressPercent}%`}}></div>
               </div>
               <p className="text-xs font-bold relative z-10 flex justify-between">
                 <span>{progressPercent}% de la meta</span>
                 <span className="opacity-60">Meta: $350k</span>
               </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
               <h4 className="text-xs font-bold uppercase text-slate-500 mb-6">Estado de Infraestructura</h4>
               <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">Dominio Casami.com</span>
                      <span className="text-[10px] font-bold text-green-500">ACTIVO</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">Base de Datos SQL</span>
                      <span className="text-[10px] font-bold text-green-500">99.9% UPTIME</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[99.9%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">SSL / Seguridad</span>
                      <span className="text-[10px] font-bold text-blue-500">PROTEGIDO</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-full"></div>
                    </div>
                  </div>
               </div>

               <div className="mt-10 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Almacenamiento Cloud</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[12.5%]"></div>
                    </div>
                    <span className="text-xs font-bold">12.5%</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
